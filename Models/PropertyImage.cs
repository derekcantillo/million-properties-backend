using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MillionProperties.Api.Models;

public class PropertyImage
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [BsonElement("_id")]
    public string IdPropertyImage { get; set; } = null!;
    
    [BsonElement("idProperty")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string IdProperty { get; set; } = null!;
    
    [BsonElement("file")]
    public string File { get; set; } = null!;
    
    [BsonElement("enabled")]
    public bool Enabled { get; set; }
}
