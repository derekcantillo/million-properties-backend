using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace MillionProperties.Api.Models;

public class Property
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [JsonPropertyName("id")]
    public string Id { get; set; } = null!;
    
    [BsonElement("idOwner")]
    [BsonRepresentation(BsonType.ObjectId)]
    [JsonPropertyName("idOwner")]
    public string IdOwner { get; set; } = null!;
    
    [BsonElement("name")]
    [JsonPropertyName("name")]
    public string Name { get; set; } = null!;
    
    [BsonElement("addressProperty")]
    [JsonPropertyName("addressProperty")]
    public string AddressProperty { get; set; } = null!;
    
    [BsonElement("priceProperty")]
    [JsonPropertyName("priceProperty")]
    public decimal PriceProperty { get; set; }
    
    [BsonElement("codeInternal")]
    [JsonPropertyName("codeInternal")]
    public string CodeInternal { get; set; } = null!;
    
    [BsonElement("year")]
    [JsonPropertyName("year")]
    public int Year { get; set; }
    
    [BsonIgnoreIfNull]
    [JsonPropertyName("owner")]
    public Owner? Owner { get; set; }
    
    [BsonIgnoreIfNull]
    [JsonPropertyName("images")]
    public List<PropertyImage>? Images { get; set; }
    
    [BsonIgnoreIfNull]
    [JsonPropertyName("traces")]
    public List<PropertyTrace>? Traces { get; set; }
}
