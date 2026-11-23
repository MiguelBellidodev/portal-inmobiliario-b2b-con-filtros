-- Schema para Portal inmobiliario B2B con filtros…
-- Generado por Mateo (Backend & DB Engineer)

CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  categoria VARCHAR(100),
  precio NUMERIC(12,2) NOT NULL,
  precio_descuento NUMERIC(12,2),
  stock INT DEFAULT 0,
  unidad VARCHAR(50) DEFAULT 'unidad',
  imagen_url TEXT,
  activo BOOLEAN DEFAULT true,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  cliente_nombre VARCHAR(255) NOT NULL,
  cliente_telefono VARCHAR(50) NOT NULL,
  cliente_email VARCHAR(255),
  total NUMERIC(12,2) NOT NULL,
  estado VARCHAR(50) DEFAULT 'pendiente',
  items JSONB NOT NULL,
  notas TEXT,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contactos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  telefono VARCHAR(50),
  mensaje TEXT,
  origen VARCHAR(100) DEFAULT 'web',
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_items_categoria ON items(categoria);
CREATE INDEX idx_items_activo ON items(activo);
CREATE INDEX idx_pedidos_estado ON pedidos(estado);
CREATE INDEX idx_pedidos_creado ON pedidos(creado_en);
CREATE INDEX idx_contactos_creado ON contactos(creado_en);
