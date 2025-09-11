using System.Text.Json.Serialization;

namespace MillionProperties.Api.Models;

public class PagedResult<T>
{
    [JsonPropertyName("data")]
    public IEnumerable<T> Data { get; set; } = null!;
    
    [JsonPropertyName("total")]
    public int Total { get; set; }
    
    [JsonPropertyName("page")]
    public int Page { get; set; }
    
    [JsonPropertyName("pageSize")]
    public int PageSize { get; set; }
    
    [JsonPropertyName("totalPages")]
    public int TotalPages { get; set; }
    
    [JsonPropertyName("hasNextPage")]
    public bool HasNextPage { get; set; }
    
    [JsonPropertyName("hasPreviousPage")]
    public bool HasPreviousPage { get; set; }
    
    [JsonPropertyName("isLastPage")]
    public bool IsLastPage { get; set; }
}
