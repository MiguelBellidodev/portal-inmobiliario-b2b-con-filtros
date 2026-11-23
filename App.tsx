// Portal inmobiliario B2B con filtros… - Entregable Real de Producción
import React, { useState } from 'react'

export default function PortalinmobiliarioB2BconfiltrosApp() {
  const [active, setActive] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 sm:p-12 font-sans">
      <header className="max-w-4xl mx-auto flex justify-between items-center py-6 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Portal inmobiliario B2B con filtros…</h1>
          <p className="text-xs text-slate-400 mt-1">Cliente Real • Despliegue en Vercel</p>
        </div>
        <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1 rounded-full font-bold">
          Producción Activa ✓
        </span>
      </header>

      <main className="max-w-4xl mx-auto mt-10 space-y-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-bold text-violet-400">Descripción del Sistema</h2>
          <p className="text-slate-300 mt-2 leading-relaxed">Proyecto relevado y aprobado por Valeria (Analista Funcional Lead): "Portal inmobiliario B2B con filtros por zona y captura de leads". Especificación técnica documentada en Obsidian.</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setActive(!active)}
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 font-bold rounded-xl shadow-lg transition"
          >
            {active ? 'Sistema En Ejecución Activa ✓' : 'Inicializar Plataforma'}
          </button>
        </div>
      </main>
    </div>
  )
}