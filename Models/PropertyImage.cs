using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MillionProperties.Api.Models;

public class PropertyImage
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string IdPropertyImage { get; set; } = null!;
    
    [BsonRepresentation(BsonType.ObjectId)]
    public string IdProperty { get; set; } = null!;
    
    public string File { get; set; } = null!;
    
    public bool Enabled { get; set; }
}
