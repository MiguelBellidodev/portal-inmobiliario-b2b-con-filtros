# Documento de Especificación Funcional (DEF)
## Proyecto: Portal inmobiliario B2B con filtros por zona y captura de leads
> **Autor:** Valeria (Analista Funcional Lead & Product Owner de Miguel Bellido AI)
> **Fecha:** 23/11/2026 • **Cliente:** Cliente Real
> **Deadline Estricto:** 3 a 4 horas (Entrega Urgente Express en Producción Vercel)

---

### 1. Modelo de Negocio y Público Objetivo
Venta directa B2C y B2B de productos con alta rotación. Propuesta de valor: catálogo visual moderno, sin fricción de registro, compra inmediata a WhatsApp con mensaje estructurado y total en ARS.

### 2. Flujo de Usuario & Conversión (User Journey)
1. Usuario ingresa a la landing page mobile-first.
2. Filtra por categorías y productos con % de descuento.
3. Selecciona artículos y presiona "Pedir por WhatsApp".
4. Se abre chat de WhatsApp con pedido pre-armado y datos de envío.

### 3. User Stories & Criterios de Aceptación (Gherkin BDD)
```gherkin
Característica: Conversión rápida y checkout transaccional
  Escenario: Usuario explora catálogo y realiza pedido
    Dado que un usuario ingresa a la plataforma web
    Cuando selecciona productos con descuento y abre el carrito
    Entonces el sistema calcula el subtotal y habilita el botón "Pedir por WhatsApp"
    Y al hacer click, se abre el chat directo con el decisor comercial con el pedido estructurado.
```

### 4. Entidades & Modelo de Datos
• Producto: id, nombre, descripción, precio, % descuento, stock, foto, categoría.
• Pedido: id, cliente, teléfono, items[], totalARS, estado.
• Backoffice: gestión de inventario y personalización de banners y colores.

### 5. Integraciones Externas & Backoffice
API de WhatsApp Directo (wa.me), Base de datos PostgreSQL para catálogo y stock, Webhook a Google Sheets / CRM y despliegue serverless en Vercel.

### 6. Criterios de Aceptación para Producción en Vercel (Definition of Done)
• Mobile-first responsive validado de 375px a 1440px.
• Core Web Vitals: LCP menor a 1.2s, cero layout shift.
• Suite E2E de Joaquín QA en Vercel con Playwright aprobada al 100%.
• Cero errores en consola de JavaScript y conexión SSL/HTTPS estricta.

---

### 7. Matriz de Transmisión al Equipo de Especialistas
- **Lucas (Frontend):** Scaffolding en React 19 + Tailwind CSS, catálogo interactivo y responsive mobile-first.
- **Mateo (Backend):** Estructura de datos PostgreSQL, persistencia y endpoints con latencia mínima.
- **Tomás (UI/UX):** Tokens semánticos, diseño moderno, micro-interacciones de compra y contraste accesible.
- **Sofía (DevOps):** Repositorio en GitHub personal y pipeline de despliegue continuo en Vercel.
- **Martina (Seguridad):** Auditoría AppSec, sanitización de inputs y políticas OWASP.
- **Joaquín (Testing QA):** Batería de tests Playwright E2E y smoke tests previos al release.
