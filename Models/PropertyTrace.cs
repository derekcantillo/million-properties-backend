using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MillionProperties.Api.Models;

public class PropertyTrace
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string IdPropertyTrace { get; set; } = null!;
    
    [BsonRepresentation(BsonType.ObjectId)]
    public string IdProperty { get; set; } = null!;
    
    public DateTime DateSale { get; set; }
    
    public string Name { get; set; } = null!;
    
    public decimal Value { get; set; }
    
    public decimal Tax { get; set; }
}
