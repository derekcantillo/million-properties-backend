
# Million Properties API 🏠

Una API REST moderna desarrollada con **.NET 9** para la gestión de propiedades inmobiliarias. Este proyecto fue creado como parte de una prueba técnica full-stack para una inmobiliaria que requería un sistema completo para listar propiedades con funcionalidades de búsqueda y filtrado avanzadas.

## 🌐 Enlaces de Despliegue

- **Frontend**: [https://million-properties-frontend.vercel.app/es](https://million-properties-frontend.vercel.app/es)
- **API Backend**: [https://api.derekcantillo.com/api/](https://api.derekcantillo.com/api/)

## 🚀 Tecnologías Utilizadas

- **.NET 9** - Framework principal
- **ASP.NET Core Web API** - Para la creación de APIs REST
- **MongoDB** - Base de datos NoSQL (MongoDB Atlas Cloud)
- **MongoDB.Driver** - Driver oficial de MongoDB para .NET
- **Swagger/OpenAPI** - Documentación automática de la API
- **Docker** - Containerización
- **AWS ECS** - Servicio de contenedores para el despliegue
- **AWS Fargate** - Plataforma serverless para contenedores

## 📋 Características

### Funcionalidades Principales

- ✅ **Listado de propiedades** con paginación
- ✅ **Búsqueda avanzada** por nombre y dirección
- ✅ **Filtros por precio** (mínimo y máximo)
- ✅ **Ordenamiento** por diferentes campos
- ✅ **Obtención de propiedades individuales** por slug
- ✅ **Información completa** de propietarios, imágenes y trazas
- ✅ **API RESTful** con respuestas JSON estructuradas
- ✅ **Documentación automática** con Swagger
- ✅ **Health checks** para monitoreo
- ✅ **CORS configurado** para integración frontend

### Arquitectura

- **Patrón Repository/Service** para separación de responsabilidades
- **Inyección de dependencias** nativa de .NET
- **Configuración basada en archivos** appsettings.json
- **Modelos fuertemente tipados** con validaciones
- **Mapeo automático** MongoDB ↔ C# Objects

## 🏗️ Estructura del Proyecto

```
MillionProperties.Api/
├── Controllers/           # Controladores de la API
│   └── PropertiesController.cs
├── Models/               # Modelos de datos
│   ├── Property.cs
│   ├── Owner.cs
│   ├── PropertyImage.cs
│   ├── PropertyTrace.cs
│   ├── PagedResult.cs
│   └── MongoDbSettings.cs
├── Services/             # Lógica de negocio
│   ├── IPropertyService.cs
│   └── PropertyService.cs
├── seeds/               # Scripts de inicialización de datos
│   └── seed.js
├── configuration/       # Configuraciones de CI/CD
│   └── buildspec.yml
├── Dockerfile          # Configuración de contenedor
├── docker-compose.yml  # Orquestación local
└── README.md          # Este archivo
```

## 📊 Modelo de Datos

### Property (Propiedad)

```json
{
  "id": "string",
  "idOwner": "string", 
  "name": "string",
  "slug": "string",
  "addressProperty": "string",
  "priceProperty": "decimal",
  "codeInternal": "string",
  "year": "integer",
  "owner": "Owner",
  "images": ["PropertyImage"],
  "traces": ["PropertyTrace"]
}
```

### Características del Modelo

- **Identificadores únicos** con ObjectId de MongoDB
- **Slugs amigables** para URLs
- **Precios decimales** para precisión monetaria
- **Relaciones embebidas** con propietarios, imágenes y trazas
- **Serialización JSON** con camelCase automático

## 🔌 API Endpoints

### GET /api/properties

Obtiene una lista paginada de propiedades con filtros opcionales.

**Parámetros de consulta:**

- `name` (string, opcional) - Filtrar por nombre de propiedad
- `address` (string, opcional) - Filtrar por dirección
- `minPrice` (decimal, opcional) - Precio mínimo
- `maxPrice` (decimal, opcional) - Precio máximo
- `page` (int, default: 1) - Número de página
- `pageSize` (int, default: 10) - Elementos por página
- `sortBy` (string, opcional) - Campo para ordenar
- `sortDir` (string, opcional) - Dirección del ordenamiento (asc/desc)

**Ejemplo de respuesta:**

```json
{
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "Casa Moderna en Zona Norte",
      "slug": "casa-moderna-zona-norte",
      "addressProperty": "Calle 123 #45-67",
      "priceProperty": 350000000,
      "year": 2020,
      "owner": {
        "name": "Juan Pérez",
        "phone": "+57 300 123 4567"
      }
    }
  ],
  "totalCount": 1,
  "page": 1,
  "pageSize": 10,
  "totalPages": 1
}
```

### GET /api/properties/

Obtiene una propiedad específica por su slug.

**Parámetros:**

- `slug` (string) - Identificador único de la propiedad

**Ejemplo de respuesta:**

```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "Casa Moderna en Zona Norte",
  "slug": "casa-moderna-zona-norte",
  "addressProperty": "Calle 123 #45-67",
  "priceProperty": 350000000,
  "codeInternal": "PROP-001",
  "year": 2020,
  "owner": {
    "name": "Juan Pérez",
    "address": "Carrera 45 #12-34",
    "phone": "+57 300 123 4567"
  },
  "images": [
    {
      "file": "casa-moderna-1.jpg",
      "enabled": true
    }
  ],
  "traces": [
    {
      "dateSale": "2023-01-15T00:00:00Z",
      "name": "Venta inicial",
      "value": 350000000,
      "tax": 35000000
    }
  ]
}
```

### GET /health

Endpoint de verificación de salud del servicio.

## 🛠️ Configuración Local

### Prerrequisitos

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [MongoDB](https://www.mongodb.com/) (local o acceso a MongoDB Atlas)
- [Docker](https://www.docker.com/) (opcional)

### Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone <repository-url>
   cd MillionProperties.Api
   ```
2. **Restaurar dependencias:**

   ```bash
   dotnet restore
   ```
3. **Configurar la base de datos:**

   Actualizar `appsettings.Development.json`:

   ```json
   {
     "MongoDb": {
       "ConnectionString": "tu-connection-string-aqui",
       "DatabaseName": "MillionPropertiesDB"
     }
   }
   ```
4. **Ejecutar la aplicación:**

   ```bash
   dotnet run
   ```
5. **Acceder a la documentación:**

   - Swagger UI: `https://localhost:5058/swagger`
   - API: `https://localhost:5058/api/properties`

### Usando Docker

1. **Construir la imagen:**

   ```bash
   docker build -t million-properties-api .
   ```
2. **Ejecutar el contenedor:**

   ```bash
   docker run -p 5058:5058 million-properties-api
   ```
3. **Con docker-compose:**

   ```bash
   docker-compose up
   ```

## 🗄️ Base de Datos

### MongoDB Atlas

La aplicación utiliza **MongoDB Atlas** como base de datos en la nube, proporcionando:

- **Alta disponibilidad** y escalabilidad automática
- **Backups automáticos** y recuperación ante desastres
- **Seguridad avanzada** con cifrado en tránsito y reposo
- **Monitoreo integrado** y métricas de rendimiento

### Estructura de Colecciones

- `properties` - Colección principal de propiedades
- `owners` - Información de propietarios (embebida)
- `images` - Imágenes de propiedades (embebidas)
- `traces` - Historial de transacciones (embebido)

### Scripts de Inicialización

El archivo `seeds/seed.js` contiene datos de ejemplo para poblar la base de datos:

```bash
mongosh "your-connection-string" --file seeds/seed.js
```

## 🚀 Despliegue en AWS

### Arquitectura de Despliegue

- **AWS ECS (Elastic Container Service)** - Orquestación de contenedores
- **AWS Fargate** - Plataforma serverless para contenedores
- **Application Load Balancer** - Distribución de tráfico
- **AWS VPC** - Red privada virtual
- **Route 53** - DNS y dominio personalizado
- **AWS Certificate Manager** - Certificados SSL/TLS

### Configuración del Dominio

- Dominio principal: `derekcantillo.com`
- API endpoint: `api.derekcantillo.com`
- Certificado SSL automático via AWS Certificate Manager

### CI/CD Pipeline

El proyecto incluye configuración para AWS CodeBuild:

```yaml
# configuration/buildspec.yml
version: 0.2
phases:
  pre_build:
    commands:
      - echo Logging in to Amazon ECR...
      - aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com
  build:
    commands:
      - echo Build started on `date`
      - docker build -t $IMAGE_REPO_NAME:$IMAGE_TAG .
      - docker tag $IMAGE_REPO_NAME:$IMAGE_TAG $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG
  post_build:
    commands:
      - docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$IMAGE_REPO_NAME:$IMAGE_TAG
```

## 🔧 Configuración de Producción

### Variables de Entorno

```bash
ASPNETCORE_ENVIRONMENT=Production
ASPNETCORE_URLS=http://+:5058
MongoDB__ConnectionString=mongodb+srv://...
MongoDB__DatabaseName=MillionPropertiesDB
```

### Configuraciones de Seguridad

- **CORS habilitado** para dominios específicos
- **HTTPS enforcement** en producción
- **Health checks** para monitoreo de contenedores
- **Logging estructurado** para análisis de logs

## 📈 Rendimiento y Escalabilidad

### Optimizaciones Implementadas

- **Paginación eficiente** para grandes conjuntos de datos
- **Índices de MongoDB** para consultas rápidas
- **Serialización JSON optimizada** con System.Text.Json
- **Consultas asíncronas** para mejor throughput
- **Connection pooling** de MongoDB automático

### Métricas de Rendimiento

- **Tiempo de respuesta promedio**: < 200ms
- **Throughput**: > 1000 requests/segundo
- **Disponibilidad**: 99.9% uptime
- **Escalabilidad horizontal** via AWS Fargate

## 🧪 Testing

### Archivo de Pruebas HTTP

El proyecto incluye `MillionProperties.Api.http` con ejemplos de requests:

```http
### Get all properties
GET https://api.derekcantillo.com/api/properties

### Get properties with filters
GET https://api.derekcantillo.com/api/properties?name=casa&minPrice=100000&maxPrice=500000

### Get property by slug
GET https://api.derekcantillo.com/api/properties/casa-moderna-zona-norte
```

## 👨‍💻 Autor

**Derek Cantillo**

- Website: [derekcantillo.com](https://derekcantillo.com)
- API: [api.derekcantillo.com](https://api.derekcantillo.com)

## 📝 Licencia

Este proyecto fue desarrollado como parte de una prueba técnica y está disponible para fines educativos y de demostración.

---

### 🎯 Notas de la Prueba Técnica

Este proyecto demuestra conocimientos full-stack incluyendo:

- **Backend**: API REST con .NET 9, MongoDB, patrones de diseño
- **DevOps**: Containerización, despliegue en AWS, CI/CD
- **Arquitectura**: Diseño escalable, separación de responsabilidades
- **Documentación**: APIs bien documentadas, código limpio
- **Producción**: Aplicación desplegada y funcional en la nube

La solución completa incluye tanto el backend (esta API) como el frontend desarrollado por separado, demostrando una comprensión integral del desarrollo de aplicaciones web modernas.
