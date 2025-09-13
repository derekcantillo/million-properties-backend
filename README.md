# 🏠 MillionProperties API

API REST para gestión de propiedades inmobiliarias desarrollada con .NET 9, MongoDB y arquitectura limpia.

## 📋 Tabla de Contenidos

- [Requisitos](#-requisitos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Ejecución](#-ejecución)
- [Uso de la API](#-uso-de-la-api)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Base de Datos](#-base-de-datos)
- [CORS](#-cors)
- [Testing](#-testing)
- [Troubleshooting](#-troubleshooting)

## 🛠 Requisitos

### Software Necesario

- **.NET 9 SDK** o superior
- **MongoDB** 4.4 o superior
- **Git** (para clonar el repositorio)

### Verificar Instalaciones

```bash
# Verificar .NET
dotnet --version

# Verificar MongoDB
mongod --version

# Verificar Git
git --version
```

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd MillionProperties.Api
```

### 2. Restaurar Dependencias

```bash
dotnet restore
```

### 3. Compilar el Proyecto

```bash
dotnet build
```

## ⚙️ Configuración

### 1. Configurar MongoDB

#### Opción A: MongoDB Local

```bash
# Iniciar MongoDB
mongod

# O si tienes MongoDB como servicio
sudo systemctl start mongod
```

#### Opción B: MongoDB Atlas (Cloud)

1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Crear un cluster
3. Obtener la connection string
4. Actualizar `appsettings.json`:

```json
{
  "MongoDb": {
    "ConnectionString": "mongodb+srv://username:password@cluster.mongodb.net/",
    "DatabaseName": "MillionPropertiesDB"
  }
}
```

### 2. Configurar la Base de Datos

#### Ejecutar el Seed Corregido

```bash
# Conectar a MongoDB
mongosh

# Ejecutar el seed
mongosh seeds/seed.js
```

#### Verificar Datos

```javascript
// Verificar colecciones creadas
db.Owners.countDocuments()
db.Properties.countDocuments()
db.PropertyImages.countDocuments()
db.PropertyTraces.countDocuments()

// Ver una propiedad con sus relaciones
db.Properties.findOne()
```

### 3. Configurar CORS (Opcional)

Si necesitas acceso desde un frontend, edita `appsettings.json`:

```json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:3000",
      "https://tu-dominio.com"
    ],
    "AllowCredentials": true
  }
}
```

## 🏃‍♂️ Ejecución

### Desarrollo

```bash
# Ejecutar en modo desarrollo
dotnet run

# O con hot reload
dotnet watch run
```

### Producción

```bash
# Compilar para producción
dotnet publish -c Release -o ./publish

# Ejecutar
dotnet ./publish/MillionProperties.Api.dll
```

### Verificar que Funciona

- La API estará disponible en: `http://localhost:5058`
- Swagger UI: `http://localhost:5058/swagger`
- Health check: `http://localhost:5058/api/properties`

## 📚 Uso de la API

### Endpoints Disponibles

#### 1. Obtener Propiedades (Paginado)

```http
GET /api/properties?page=1&pageSize=10
```

**Parámetros de Query:**

- `page` (opcional): Número de página (default: 1)
- `pageSize` (opcional): Elementos por página (default: 10)
- `name` (opcional): Filtrar por nombre
- `address` (opcional): Filtrar por dirección
- `minPrice` (opcional): Precio mínimo
- `maxPrice` (opcional): Precio máximo

**Ejemplos:**

```http
# Obtener todas las propiedades
GET /api/properties

# Filtrar por nombre
GET /api/properties?name=Weston

# Filtrar por rango de precios
GET /api/properties?minPrice=1000000&maxPrice=2000000

# Combinar filtros
GET /api/properties?name=Miami&minPrice=500000&page=2&pageSize=5
```

#### 2. Obtener Propiedad por slug

```http
GET /api/properties/{slug}
```

**Ejemplo:**

```http
GET /api/properties/propiedad-en-aventura-2
```

### Estructura de Respuesta

#### Lista de Propiedades

```json
{
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "idOwner": "507f1f77bcf86cd799439012",
      "name": "Propiedad en Weston #1",
      "addressProperty": "101 Main St, Weston, FL",
      "priceProperty": 1660328,
      "codeInternal": "PROP-001",
      "year": 2011,
      "owner": {
        "idOwner": "507f1f77bcf86cd799439012",
        "name": "Owner 1",
        "address": "Weston, FL",
        "photo": "https://picsum.photos/id/1001/200/200",
        "birthday": "1983-10-22T00:00:00Z"
      },
      "images": [
        {
          "idPropertyImage": "507f1f77bcf86cd799439013",
          "idProperty": "507f1f77bcf86cd799439011",
          "file": "https://picsum.photos/id/101/800/600",
          "enabled": true
        }
      ],
      "traces": [
        {
          "idPropertyTrace": "507f1f77bcf86cd799439014",
          "idProperty": "507f1f77bcf86cd799439011",
          "dateSale": "2010-06-18T00:00:00Z",
          "name": "Venta #1",
          "value": 371080,
          "tax": 10251
        }
      ]
    }
  ],
  "total": 50,
  "page": 1,
  "pageSize": 10,
  "totalPages": 5,
  "hasNextPage": true,
  "hasPreviousPage": false,
  "isLastPage": false
}
```

#### cURL

```bash
# Obtener propiedades
curl -X GET "http://localhost:5058/api/properties?page=1&pageSize=10"

# Filtrar por nombre
curl -X GET "http://localhost:5058/api/properties?name=Weston"

# Obtener propiedad específica
curl -X GET "http://localhost:5058/api/properties/507f1f77bcf86cd799439011"
```

## 📁 Estructura del Proyecto

```
MillionProperties.Api/
├── Controllers/
│   └── PropertiesController.cs      # Controlador de la API
├── Models/
│   ├── Property.cs                  # Modelo de Propiedad
│   ├── Owner.cs                     # Modelo de Propietario
│   ├── PropertyImage.cs             # Modelo de Imagen
│   ├── PropertyTrace.cs             # Modelo de Traza
│   ├── PagedResult.cs               # Modelo de Paginación
│   ├── MongoDbSettings.cs           # Configuración de MongoDB
│   └── CorsSettings.cs              # Configuración de CORS
├── Services/
│   ├── IPropertyService.cs          # Interfaz del Servicio
│   └── PropertyService.cs           # Implementación del Servicio
├── seeds/
│   ├── seed.js                      # Seed original (incorrecto)
│   └── seed_corrected.js            # Seed corregido (usar este)
├── Program.cs                       # Punto de entrada
├── appsettings.json                 # Configuración
└── MillionProperties.Api.csproj     # Archivo de proyecto
```

## 🗄️ Base de Datos

### Estructura de Colecciones

#### Owners (Propietarios)

```javascript
{
  _id: ObjectId,
  name: String,
  address: String,
  photo: String,
  birthday: Date
}
```

#### Properties (Propiedades)

```javascript
{
  _id: ObjectId,
  idOwner: ObjectId,  // Referencia a Owners
  name: String,
  addressProperty: String,
  priceProperty: Number,
  codeInternal: String,
  year: Number
}
```

#### PropertyImages (Imágenes)

```javascript
{
  _id: ObjectId,
  idProperty: ObjectId,  // Referencia a Properties
  file: String,
  enabled: Boolean
}
```

#### PropertyTraces (Trazas/Historial)

```javascript
{
  _id: ObjectId,
  idProperty: ObjectId,  // Referencia a Properties
  dateSale: Date,
  name: String,
  value: Number,
  tax: Number
}
```

### Índices Creados

- `Properties.name` (texto)
- `Properties.addressProperty` (texto)
- `Properties.priceProperty` (numérico)
- `Properties.idOwner` (referencia)
- `PropertyImages.idProperty` (referencia)
- `PropertyTraces.idProperty` (referencia)

## 🌐 CORS

### Configuración por Defecto

La API está configurada para aceptar peticiones desde:

- `http://localhost:3000` (React/Next.js)

### Agregar Nuevos Dominios

Edita `appsettings.json`:

```json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:3000",
      "https://tu-dominio.com"
    ],
    "AllowCredentials": true
  }
}
```

## 🧪 Testing

### Usar Swagger UI

1. Ejecutar la API: `dotnet run`
2. Ir a: `http://localhost:5058/swagger`
3. Probar los endpoints desde la interfaz

### Usar Archivo HTTP

```bash
# Usar el archivo .http incluido
# Abrir MillionProperties.Api.http en VS Code
# Hacer clic en "Send Request" sobre cada endpoint
```

### Usar Postman

1. Importar la colección desde Swagger
2. Configurar la URL base: `http://localhost:5058`
3. Probar los endpoints

## 🔧 Troubleshooting

### Error: "MongoDB connection failed"

```bash
# Verificar que MongoDB esté corriendo
mongosh

# Si no funciona, iniciar MongoDB
mongod
```

### Error: "CORS policy: No 'Access-Control-Allow-Origin' header"

1. Verificar que el dominio esté en `AllowedOrigins`
2. Verificar que `UseCors()` esté antes de `UseHttpsRedirection()`
3. Reiniciar la aplicación

### Error: "Element 'idOwner' does not match any field"

1. Asegúrate de usar `seed_corrected.js` (no el original)
2. Verificar que las colecciones tengan la estructura correcta
3. Reiniciar la aplicación

### Error: "Database not found"

1. Ejecutar el seed: `load("seeds/seed_corrected.js")`
2. Verificar que la base de datos se llame `MillionPropertiesDB`

### Puerto en Uso

```bash
# Cambiar puerto en launchSettings.json
# O matar el proceso
lsof -ti:5058 | xargs kill -9
```

## 📊 Datos de Prueba

El seed incluye:

- **50 propietarios** únicos
- **50 propiedades** con datos realistas
- **~150 imágenes** distribuidas entre propiedades
- **~50 trazas** de historial de ventas
- **Índices optimizados** para consultas rápidas

## 🚀 Despliegue

### Docker

```dockerfile
# Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:9.0
COPY ./publish /app
WORKDIR /app
EXPOSE 5058
ENTRYPOINT ["dotnet", "MillionProperties.Api.dll"]
```

### Variables de Entorno

```bash
# Configurar para producción
export MongoDB__ConnectionString="mongodb://localhost:27017"
export MongoDB__DatabaseName="MillionPropertiesDB"
export ASPNETCORE_ENVIRONMENT="Production"
```

## 📝 Notas de Desarrollo

- **Arquitectura:** Clean Architecture con separación de responsabilidades
- **Patrón:** Repository + Service
- **ORM:** MongoDB Driver nativo
- **Serialización:** System.Text.Json con camelCase
- **Documentación:** Swagger/OpenAPI automática
- **Performance:** Consultas optimizadas con índices

---

**¡La API está lista para usar! 🎉**

Para más información, consulta la documentación de Swagger en `http://localhost:5058/swagger` cuando la API esté ejecutándose.
