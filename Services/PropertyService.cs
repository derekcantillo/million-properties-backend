using MongoDB.Driver;
using Microsoft.Extensions.Options;
using MillionProperties.Api.Models;

namespace MillionProperties.Api.Services;

public class PropertyService : IPropertyService
{
    private readonly IMongoCollection<Property> _properties;
    private readonly IMongoCollection<Owner> _owners;
    private readonly IMongoCollection<PropertyImage> _images;
    private readonly IMongoCollection<PropertyTrace> _traces;

    public PropertyService(IMongoClient mongoClient, IOptions<MongoDbSettings> settings)
    {
        var database = mongoClient.GetDatabase(settings.Value.DatabaseName);
        _properties = database.GetCollection<Property>("Properties");
        _owners = database.GetCollection<Owner>("Owners");
        _images = database.GetCollection<PropertyImage>("PropertyImages");
        _traces = database.GetCollection<PropertyTrace>("PropertyTraces");
    }

    public async Task<PagedResult<Property>> GetPropertiesAsync(
        string? name = null,
        string? address = null,
        decimal? minPrice = null,
        decimal? maxPrice = null,
        int page = 1,
        int pageSize = 10)
    {
        // Construir filtros para el match stage
        var matchFilters = new List<MongoDB.Bson.BsonDocument>();
        
        if (!string.IsNullOrWhiteSpace(name))
        {
            matchFilters.Add(new MongoDB.Bson.BsonDocument("name", 
                new MongoDB.Bson.BsonRegularExpression(name, "i")));
        }

        if (!string.IsNullOrWhiteSpace(address))
        {
            matchFilters.Add(new MongoDB.Bson.BsonDocument("addressProperty", 
                new MongoDB.Bson.BsonRegularExpression(address, "i")));
        }

        if (minPrice.HasValue)
        {
            matchFilters.Add(new MongoDB.Bson.BsonDocument("priceProperty", 
                new MongoDB.Bson.BsonDocument("$gte", minPrice.Value)));
        }

        if (maxPrice.HasValue)
        {
            matchFilters.Add(new MongoDB.Bson.BsonDocument("priceProperty", 
                new MongoDB.Bson.BsonDocument("$lte", maxPrice.Value)));
        }

        var matchStage = matchFilters.Any() 
            ? new MongoDB.Bson.BsonDocument("$match", new MongoDB.Bson.BsonDocument("$and", 
                new MongoDB.Bson.BsonArray(matchFilters)))
            : new MongoDB.Bson.BsonDocument("$match", new MongoDB.Bson.BsonDocument());

        // Pipeline de agregación optimizado
        var pipeline = new[]
        {
            matchStage,
            new MongoDB.Bson.BsonDocument("$lookup", new MongoDB.Bson.BsonDocument
            {
                { "from", "Owners" },
                { "localField", "idOwner" },
                { "foreignField", "_id" },
                { "as", "owner" }
            }),
            new MongoDB.Bson.BsonDocument("$lookup", new MongoDB.Bson.BsonDocument
            {
                { "from", "PropertyImages" },
                { "localField", "_id" },
                { "foreignField", "idProperty" },
                { "as", "images" }
            }),
            new MongoDB.Bson.BsonDocument("$lookup", new MongoDB.Bson.BsonDocument
            {
                { "from", "PropertyTraces" },
                { "localField", "_id" },
                { "foreignField", "idProperty" },
                { "as", "traces" }
            }),
            new MongoDB.Bson.BsonDocument("$addFields", new MongoDB.Bson.BsonDocument
            {
                { "owner", new MongoDB.Bson.BsonDocument("$arrayElemAt", 
                    new MongoDB.Bson.BsonArray { "$owner", 0 }) }
            }),
            new MongoDB.Bson.BsonDocument("$facet", new MongoDB.Bson.BsonDocument
            {
                { "data", new MongoDB.Bson.BsonArray
                {
                    new MongoDB.Bson.BsonDocument("$skip", (page - 1) * pageSize),
                    new MongoDB.Bson.BsonDocument("$limit", pageSize)
                }},
                { "totalCount", new MongoDB.Bson.BsonArray
                {
                    new MongoDB.Bson.BsonDocument("$count", "count")
                }}
            })
        };

        var result = await _properties.Aggregate<MongoDB.Bson.BsonDocument>(pipeline).FirstOrDefaultAsync();
        
        var data = result["data"].AsBsonArray.Select(d => MongoDB.Bson.Serialization.BsonSerializer.Deserialize<Property>(d.AsBsonDocument)).ToList();
        var total = result["totalCount"].AsBsonArray.FirstOrDefault()?["count"]?.AsInt32 ?? 0;
        var totalPages = (int)Math.Ceiling(total / (double)pageSize);

        return new PagedResult<Property>
        {
            Data = data,
            Total = total,
            Page = page,
            PageSize = pageSize,
            TotalPages = totalPages,
            HasNextPage = page < totalPages,
            HasPreviousPage = page > 1,
            IsLastPage = page == totalPages
        };
    }

    public async Task<Property?> GetPropertyByIdAsync(string id)
    {
        var pipeline = new[]
        {
            new MongoDB.Bson.BsonDocument("$match", new MongoDB.Bson.BsonDocument("_id", 
                MongoDB.Bson.ObjectId.Parse(id))),
            new MongoDB.Bson.BsonDocument("$lookup", new MongoDB.Bson.BsonDocument
            {
                { "from", "Owners" },
                { "localField", "idOwner" },
                { "foreignField", "_id" },
                { "as", "owner" }
            }),
            new MongoDB.Bson.BsonDocument("$lookup", new MongoDB.Bson.BsonDocument
            {
                { "from", "PropertyImages" },
                { "localField", "_id" },
                { "foreignField", "idProperty" },
                { "as", "images" }
            }),
            new MongoDB.Bson.BsonDocument("$lookup", new MongoDB.Bson.BsonDocument
            {
                { "from", "PropertyTraces" },
                { "localField", "_id" },
                { "foreignField", "idProperty" },
                { "as", "traces" }
            }),
            new MongoDB.Bson.BsonDocument("$addFields", new MongoDB.Bson.BsonDocument
            {
                { "owner", new MongoDB.Bson.BsonDocument("$arrayElemAt", 
                    new MongoDB.Bson.BsonArray { "$owner", 0 }) }
            })
        };

        var result = await _properties.Aggregate<MongoDB.Bson.BsonDocument>(pipeline).FirstOrDefaultAsync();
        
        if (result == null)
            return null;

        return MongoDB.Bson.Serialization.BsonSerializer.Deserialize<Property>(result);
    }
}
