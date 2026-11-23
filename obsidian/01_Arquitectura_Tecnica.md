# Arquitectura Técnica: LOGISTIQ B2B Real Estate Platform

## 1. Stack Tecnológico
- **Frontend:** HTML5 Semántico + Tailwind CSS 4 CDN + Vanilla ES6 Modular (Sub-100ms TTI)
- **Framework de Estilo:** Arquetipo Luxury Editorial & Corporate Industrial (Cormorant Garamond + Plus Jakarta Sans + JetBrains Mono)
- **Base de Datos Relacional:** PostgreSQL 16 con extensiones espaciales PostGIS (ver schema.sql)
- **Despliegue:** Vercel Global Edge Network (Zero-Config, cleanUrls: true)
- **Control de Calidad:** Playwright E2E Suite con verificación visual y pruebas de filtros
- **Seguridad:** Content Security Policy estricto, sanitización de inputs y validación de tipos

## 2. Esquema de Índices en Base de Datos
- `idx_inmuebles_tipologia` en columna `tipologia`
- `idx_inmuebles_zona` en columna `zona`
- `idx_inmuebles_precio` en columna `precio_usd`
- `idx_inmuebles_superficie` en columna `superficie_m2`
- `idx_inmuebles_caprate` en columna `cap_rate`
