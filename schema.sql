-- Schema Relacional para LOGISTIQ B2B Real Estate Portal
-- Arquitectura diseñada por Mateo (Backend & Database Lead)

CREATE TABLE IF NOT EXISTS tipologias (
  id VARCHAR(50) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

INSERT INTO tipologias (id, nombre) VALUES
  ('nave', 'Naves Industriales & Logísticas'),
  ('crossdock', 'Centros de Cross-Docking'),
  ('oficina', 'Plantas Libres de Oficina AAA'),
  ('terreno', 'Predios en Parques Industriales')
ON CONFLICT (id) DO NOTHING;

CREATE TABLE IF NOT EXISTS activos_inmobiliarios (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  tipologia VARCHAR(50) REFERENCES tipologias(id),
  zona VARCHAR(100) NOT NULL,
  direccion_completa VARCHAR(255),
  superficie_m2 NUMERIC(10,2) NOT NULL,
  precio_usd NUMERIC(14,2) NOT NULL,
  renta_mensual_usd NUMERIC(12,2) NOT NULL,
  cap_rate NUMERIC(5,2) NOT NULL,
  docks_cantidad INT DEFAULT 0,
  altura_libre_m NUMERIC(4,2),
  resistencia_piso_tn_m2 NUMERIC(4,2),
  potencia_kva INT,
  certificacion_leed VARCHAR(50),
  tag_destacado VARCHAR(100),
  descripcion TEXT,
  imagen_url TEXT,
  activo BOOLEAN DEFAULT true,
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_inmuebles_tipologia ON activos_inmobiliarios(tipologia);
CREATE INDEX IF NOT EXISTS idx_inmuebles_zona ON activos_inmobiliarios(zona);
CREATE INDEX IF NOT EXISTS idx_inmuebles_precio ON activos_inmobiliarios(precio_usd);
CREATE INDEX IF NOT EXISTS idx_inmuebles_superficie ON activos_inmobiliarios(superficie_m2);
CREATE INDEX IF NOT EXISTS idx_inmuebles_caprate ON activos_inmobiliarios(cap_rate);

CREATE TABLE IF NOT EXISTS leads_inversores (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  empresa VARCHAR(255) NOT NULL,
  telefono VARCHAR(100) NOT NULL,
  activo_interes_id INT REFERENCES activos_inmobiliarios(id),
  notas TEXT,
  estado VARCHAR(50) DEFAULT 'nuevo',
  creado_en TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
