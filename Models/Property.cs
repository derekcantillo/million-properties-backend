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
    
    [BsonRepresentation(BsonType.ObjectId)]
    [JsonPropertyName("idOwner")]
    public string IdOwner { get; set; } = null!;
    
    [JsonPropertyName("name")]
    public string Name { get; set; } = null!;
    
    [JsonPropertyName("addressProperty")]
    public string AddressProperty { get; set; } = null!;
    
    [JsonPropertyName("priceProperty")]
    public decimal PriceProperty { get; set; }
    
    [JsonPropertyName("codeInternal")]
    public string CodeInternal { get; set; } = null!;
    
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
