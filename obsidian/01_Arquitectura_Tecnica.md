# Arquitectura Técnica: Portal inmobiliario B2B con filtros…

## Stack Tecnológico
- Frontend: React 19 + TypeScript + Tailwind CSS 4
- Backend: Serverless API REST (Node.js)
- Base de Datos: PostgreSQL / Supabase (schema.sql)
- Testing: Playwright E2E (Joaquín QA Lead)
- Automatización: n8n + Webhooks WhatsApp Business
- Despliegue: Vercel Production (CI/CD automático)
- Seguridad: HTTPS estricto, CSP headers, sanitización de inputs

## Endpoints Principales
- GET /api/items - Catálogo de productos/servicios
- POST /api/orders - Crear pedido
- GET /api/health - Health check

## Base de Datos
Ver schema.sql en la raíz del repositorio.
