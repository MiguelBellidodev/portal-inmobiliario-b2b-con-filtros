import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-4">Portal inmobiliario B2B con filtros…</h1>
      <p className="text-slate-400 text-lg mb-8">Proyecto relevado y aprobado por Valeria (Analista Funcional Lead): "Portal inmobiliario B2B con filtros por zona y captura de leads". Especificación técnica documentada en Obsidian.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
          <h3 className="font-bold mb-2">📊 Dashboard</h3>
          <p className="text-sm text-slate-400">Panel de control con métricas en tiempo real.</p>
        </div>
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
          <h3 className="font-bold mb-2">💬 WhatsApp</h3>
          <p className="text-sm text-slate-400">Integración directa de pedidos y consultas.</p>
        </div>
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
          <h3 className="font-bold mb-2">🔐 Seguridad</h3>
          <p className="text-sm text-slate-400">AppSec certificado con headers CSP y HTTPS.</p>
        </div>
      </div>
    </main>
  );
}
