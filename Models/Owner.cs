using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MillionProperties.Api.Models;

public class Owner
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string IdOwner { get; set; } = null!;
    
    public string Name { get; set; } = null!;
    
    public string Address { get; set; } = null!;
    
    public string Photo { get; set; } = null!;
    
    public DateTime Birthday { get; set; }
}
