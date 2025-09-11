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
        // Construir filtros usando el builder de MongoDB
        var filterBuilder = Builders<Property>.Filter;
        var filter = filterBuilder.Empty;

        if (!string.IsNullOrWhiteSpace(name))
        {
            filter &= filterBuilder.Regex(p => p.Name, 
                new MongoDB.Bson.BsonRegularExpression(name, "i"));
        }

        if (!string.IsNullOrWhiteSpace(address))
        {
            filter &= filterBuilder.Regex(p => p.AddressProperty, 
                new MongoDB.Bson.BsonRegularExpression(address, "i"));
        }

        if (minPrice.HasValue)
        {
            filter &= filterBuilder.Gte(p => p.PriceProperty, minPrice.Value);
        }

        if (maxPrice.HasValue)
        {
            filter &= filterBuilder.Lte(p => p.PriceProperty, maxPrice.Value);
        }

        // Obtener total de registros
        var total = await _properties.CountDocumentsAsync(filter);
        var totalPages = (int)Math.Ceiling(total / (double)pageSize);

        // Obtener propiedades con paginación
        var properties = await _properties
            .Find(filter)
            .Skip((page - 1) * pageSize)
            .Limit(pageSize)
            .ToListAsync();

        // Cargar datos relacionados de forma individual para evitar problemas de deserialización
        var resultProperties = new List<Property>();
        
        foreach (var property in properties)
        {
            // Cargar owner
            property.Owner = await _owners.Find(o => o.IdOwner == property.IdOwner).FirstOrDefaultAsync();
            
            // Cargar imágenes
            property.Images = await _images.Find(i => i.IdProperty == property.Id).ToListAsync();
            
            // Cargar trazas
            property.Traces = await _traces.Find(t => t.IdProperty == property.Id).ToListAsync();
            
            resultProperties.Add(property);
        }

        return new PagedResult<Property>
        {
            Data = resultProperties,
            Total = (int)total,
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
        var property = await _properties.Find(p => p.Id == id).FirstOrDefaultAsync();
        
        if (property == null)
            return null;

        // Cargar datos relacionados
        property.Owner = await _owners.Find(o => o.IdOwner == property.IdOwner).FirstOrDefaultAsync();
        property.Images = await _images.Find(i => i.IdProperty == property.Id).ToListAsync();
        property.Traces = await _traces.Find(t => t.IdProperty == property.Id).ToListAsync();

        return property;
    }
}
