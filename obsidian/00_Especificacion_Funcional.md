# Especificación Funcional: LOGISTIQ B2B Portal Inmobiliario con Filtros

## 1. Visión y Objetivos
- **Cliente:** Cliente Real / Institucional
- **Industria:** Real Estate Corporativo, Parques Industriales & Logística Triple A
- **Objetivo Primario:** Captar inquilinos e inversores corporativos que buscan activos logísticos e industriales en Argentina con rentabilidad en dólares y filtros avanzados.

## 2. Historias de Usuario con Criterios de Aceptación (Gherkin BDD)

### US-01: Búsqueda y Filtrado en Tiempo Real Multivariable
- **Given** que un director de operaciones o inversor ingresa al portal
- **When** selecciona tipología ("Nave Logística"), zona ("Parque Industrial Pilar") y superficie mínima ("+5.000 m²")
- **Then** el catálogo se filtra instantáneamente en sub-50ms sin recargar la página y actualiza el contador de activos disponibles.

### US-02: Simulador Financiero de Cap Rate & NOI
- **Given** que un inversor evalúa adquirir un inmueble comercial
- **When** ajusta el precio de adquisición y la renta proyectada con los sliders interactivos
- **Then** el sistema recalcula en tiempo real el Cap Rate anual neto, el ingreso operativo neto (NOI) y los años de amortización.

### US-03: Ficha Técnica y Contacto Directo con Broker
- **Given** que el usuario hace click en un activo disponible
- **When** abre el modal de detalle técnico
- **Then** visualiza las especificaciones de carga en m², altura libre de cumbrera, docks hidráulicos, zonificación y botón directo de WhatsApp para agendar visita técnica con el broker responsable.

## 3. Definition of Done (DoD)
1. 100% responsive en viewports móviles (375px a 430px) y desktop 1440px.
2. Cero errores de build en Vercel Edge Network.
3. Microdatos JSON-LD RealEstateAgent validados para indexación SEO institucional.
