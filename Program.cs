using MongoDB.Driver;
using MillionProperties.Api.Models;
using MillionProperties.Api.Services;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add MongoDB configuration
builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDB"));

// Add CORS configuration
builder.Services.Configure<CorsSettings>(
    builder.Configuration.GetSection("Cors"));

// Add MongoDB Client
builder.Services.AddSingleton<IMongoClient>(sp => 
{
    var settings = sp.GetRequiredService<IOptions<MongoDbSettings>>().Value;
    return new MongoClient(settings.ConnectionString);
});

// Add services
builder.Services.AddScoped<IPropertyService, PropertyService>();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
    {
        var corsSettings = builder.Configuration.GetSection("Cors").Get<CorsSettings>();
        
        if (corsSettings?.AllowedOrigins?.Length > 0)
        {
            policy.WithOrigins(corsSettings.AllowedOrigins)
                  .AllowAnyHeader()
                  .AllowAnyMethod();
            
            if (corsSettings.AllowCredentials)
            {
                policy.AllowCredentials();
            }
        }
        else
        {
            // Fallback a configuración por defecto
            policy.WithOrigins(
                    "http://localhost:3000",  // React/Next.js default
                    "http://localhost:3001",  // Alternative React port
                    "http://localhost:5173",  // Vite default
                    "http://localhost:8080",  // Vue.js default
                    "http://localhost:4200"   // Angular default
                )
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        }
    });
    
    // Policy más permisiva para desarrollo (opcional)
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add API configuration
builder.Services.AddControllers()
.AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
    options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
});

// Add API Explorer and Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure middlewares
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Use CORS (debe ir antes de UseHttpsRedirection)
app.UseCors("AllowSpecificOrigins"); // Para producción
// app.UseCors("AllowAll"); // Para desarrollo más permisivo

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
