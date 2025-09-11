using MillionProperties.Api.Models;

namespace MillionProperties.Api.Services;

public interface IPropertyService
{
    Task<PagedResult<Property>> GetPropertiesAsync(
        string? name = null,
        string? address = null,
        decimal? minPrice = null,
        decimal? maxPrice = null,
        int page = 1,
        int pageSize = 10);
        
    Task<Property?> GetPropertyByIdAsync(string id);
}
