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
        int pageSize = 10,
        string? sortBy = null,
        string? sortDir = null);
        
    Task<Property?> GetPropertyByIdAsync(string id);

    Task<Property?> GetPropertyBySlugAsync(string slug);
}
