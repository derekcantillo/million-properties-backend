using Microsoft.AspNetCore.Mvc;
using MillionProperties.Api.Models;
using MillionProperties.Api.Services;

namespace MillionProperties.Api.Controllers;

[ApiController]
[Route("api/properties")]
public class PropertiesController : ControllerBase
{
    private readonly IPropertyService _propertyService;

    public PropertiesController(IPropertyService propertyService)
    {
        _propertyService = propertyService;
    }

    [HttpGet]
    public async Task<ActionResult<PagedResult<Property>>> GetProperties(
        [FromQuery] string? name,
        [FromQuery] string? address,
        [FromQuery] decimal? minPrice,
        [FromQuery] decimal? maxPrice,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 10,
        [FromQuery] string? sortBy = null,
        [FromQuery] string? sortDir = null)
    {
        if (page < 1 || pageSize < 1)
            return BadRequest("Invalid pagination parameters");

        var result = await _propertyService.GetPropertiesAsync(
            name, address, minPrice, maxPrice, page, pageSize, sortBy, sortDir);
            
        return Ok(result);
    }

    [HttpGet("{slug}")]
    public async Task<ActionResult<Property>> GetProperty(string slug)
    {
        var property = await _propertyService.GetPropertyBySlugAsync(slug);
        
        if (property == null)
            return NotFound();
            
        return Ok(property);
    }
}
