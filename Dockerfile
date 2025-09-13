# Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy project file and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy source code and build
COPY . .
RUN dotnet publish -c Release -o /app/publish --no-restore

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy published files
COPY --from=build /app/publish .

# Expose port
EXPOSE 5058

# Set environment variables
ENV ASPNETCORE_URLS=http://+:5058
ENV ASPNETCORE_ENVIRONMENT=Production

# Start application
ENTRYPOINT ["dotnet", "MillionProperties.Api.dll"]