using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MillionProperties.Api.Models;

public class Owner
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [BsonElement("_id")]
    public string IdOwner { get; set; } = null!;
    
    [BsonElement("name")]
    public string Name { get; set; } = null!;
    
    [BsonElement("address")]
    public string Address { get; set; } = null!;
    
    [BsonElement("photo")]
    public string Photo { get; set; } = null!;
    
    [BsonElement("birthday")]
    public DateTime Birthday { get; set; }
}
