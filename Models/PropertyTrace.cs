using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MillionProperties.Api.Models;

public class PropertyTrace
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [BsonElement("_id")]
    public string IdPropertyTrace { get; set; } = null!;
    
    [BsonElement("idProperty")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string IdProperty { get; set; } = null!;
    
    [BsonElement("dateSale")]
    public DateTime DateSale { get; set; }
    
    [BsonElement("name")]
    public string Name { get; set; } = null!;
    
    [BsonElement("value")]
    public decimal Value { get; set; }
    
    [BsonElement("tax")]
    public decimal Tax { get; set; }
}
