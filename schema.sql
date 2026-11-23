-- Base de Datos para Portal inmobiliario B2B con filtros…
CREATE TABLE IF NOT EXISTS portal_inmobiliario_b2b_con_filtros_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS portal_inmobiliario_b2b_con_filtros_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES portal_inmobiliario_b2b_con_filtros_users(id),
  amount_ars NUMERIC(12, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'completed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_portal_inmobiliario_b2b_con_filtros_orders_user ON portal_inmobiliario_b2b_con_filtros_orders(user_id);