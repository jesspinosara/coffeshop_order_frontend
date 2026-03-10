import React, { useState } from "react";

export default function OrderConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  total,
}) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-yellow-200/90 w-full max-w-md rounded-4xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <h2 className="text-3xl font-bold text-yellow-900 mb-2">
          ¡Casi listo!
        </h2>
        <p className="text-yellow-900/70 mb-6">
          Introduce tus datos para confirmar tu pedido
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            required
            className="w-full rounded-2xl border-none bg-yellow-500/30 p-4 text-yellow-900 placeholder-gray-400/70 focus:ring-2 focus:ring-yellow-500 outline-none transition"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="tu@correo.com"
            required
            className="w-full rounded-2xl border-none bg-yellow-500/30 p-4 text-yellow-900 placeholder-gray-400/70 focus:ring-2 focus:ring-yellow-500 outline-none transition"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-2xl bg-gray-200 py-4 font-semibold text-gray-600 transition hover:bg-gray-300"
            >
              Volver
            </button>
            <button
              type="submit"
              className="flex-1 rounded-2xl bg-yellow-500 py-4 font-bold text-yellow-900 shadow-md transition hover:scale-[1.02] hover:bg-yellow-400 hover:shadow-lg"
            >
              Confirmar Pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
