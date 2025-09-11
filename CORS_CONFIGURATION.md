# 🌐 Configuración CORS - MillionProperties API

## ✅ **CORS Configurado Correctamente**

He configurado CORS para permitir el acceso desde diferentes dominios, especialmente `localhost:3000` para React/Next.js.

## 🔧 **Configuración Actual**

### **1. Dominios Permitidos por Defecto:**
- `http://localhost:3000` - React/Next.js (puerto por defecto)
- `http://localhost:3001` - React/Next.js (puerto alternativo)
- `http://localhost:5173` - Vite (puerto por defecto)
- `http://localhost:8080` - Vue.js (puerto por defecto)
- `http://localhost:4200` - Angular (puerto por defecto)

### **2. Configuración en `appsettings.json`:**
```json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173",
      "http://localhost:8080",
      "http://localhost:4200",
      "https://yourdomain.com",
      "https://www.yourdomain.com"
    ],
    "AllowCredentials": true
  }
}
```

## 🚀 **Cómo Agregar Nuevos Dominios**

### **Opción 1: Modificar `appsettings.json`**
```json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://mi-app.com",
      "https://www.mi-app.com",
      "https://staging.mi-app.com"
    ],
    "AllowCredentials": true
  }
}
```

### **Opción 2: Usar Variables de Entorno**
```bash
# En tu archivo .env o variables de sistema
CORS__AllowedOrigins__0=http://localhost:3000
CORS__AllowedOrigins__1=https://mi-app.com
CORS__AllowCredentials=true
```

### **Opción 3: Configuración por Ambiente**
Crear `appsettings.Development.json`:
```json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173"
    ],
    "AllowCredentials": true
  }
}
```

Crear `appsettings.Production.json`:
```json
{
  "Cors": {
    "AllowedOrigins": [
      "https://mi-app.com",
      "https://www.mi-app.com"
    ],
    "AllowCredentials": true
  }
}
```

## 🔄 **Políticas CORS Disponibles**

### **1. Política Específica (Recomendada para Producción)**
```csharp
app.UseCors("AllowSpecificOrigins");
```
- Solo permite dominios específicos
- Más segura
- Configurable desde `appsettings.json`

### **2. Política Permisiva (Solo para Desarrollo)**
```csharp
app.UseCors("AllowAll");
```
- Permite cualquier origen
- Solo para desarrollo local
- **NO usar en producción**

## 🧪 **Cómo Probar CORS**

### **1. Desde el Navegador (JavaScript)**
```javascript
// En tu aplicación React/Next.js
fetch('http://localhost:5058/api/properties')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### **2. Usando curl**
```bash
curl -H "Origin: http://localhost:3000" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: X-Requested-With" \
     -X OPTIONS \
     http://localhost:5058/api/properties
```

### **3. Verificar Headers de Respuesta**
La API debería devolver estos headers:
```
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: *
Access-Control-Allow-Credentials: true
```

## ⚠️ **Consideraciones de Seguridad**

### **Desarrollo:**
- ✅ Usar `AllowSpecificOrigins` con dominios locales
- ✅ Habilitar `AllowCredentials` si necesitas cookies/auth

### **Producción:**
- ✅ **NUNCA** usar `AllowAll`
- ✅ Especificar dominios exactos
- ✅ Usar HTTPS en producción
- ✅ Revisar regularmente la lista de dominios permitidos

## 🔧 **Solución de Problemas**

### **Error: "CORS policy: No 'Access-Control-Allow-Origin' header"**
1. Verificar que el dominio esté en `AllowedOrigins`
2. Verificar que `UseCors()` esté antes de `UseHttpsRedirection()`
3. Reiniciar la aplicación después de cambios

### **Error: "CORS policy: The request client is not a secure context"**
1. Usar HTTPS en producción
2. Verificar que el dominio de origen sea HTTPS

### **Error: "CORS policy: Credentials is not supported"**
1. Cambiar `AllowCredentials` a `false` en `appsettings.json`
2. O usar `AllowAnyOrigin()` en lugar de `WithOrigins()`

## 📝 **Ejemplo de Uso en Frontend**

### **React/Next.js**
```javascript
// En tu componente React
const fetchProperties = async () => {
  try {
    const response = await fetch('http://localhost:5058/api/properties', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Si necesitas cookies
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};
```

## 🎯 **Estado Actual**

- ✅ **CORS configurado** para `localhost:3000`
- ✅ **Configuración flexible** desde `appsettings.json`
- ✅ **Múltiples políticas** disponibles
- ✅ **Seguridad** considerada para producción
- ✅ **Documentación completa** para mantenimiento

**Tu API ahora acepta peticiones desde `localhost:3000` y cualquier otro dominio que agregues a la configuración.**