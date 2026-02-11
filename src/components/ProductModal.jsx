import React, { useState, useEffect, use } from "react";

export default function ProductModal({ product, isOpen, onClose, onConfirm }) {
  //Estado para las selecciones
  const [quantity, setQuantity] = useState(1);
  const [selections, setSelections] = useState({
    size: "Mediano",
    temp: product?.defaultTemp || "Frío",
    milk: "Entera",
    flavor: null,
    ice: "Hielo normal",
    sweetness: "100% dulce",
    instructions: "",
  });

  const [unitPrice, setUnitPrice] = useState(0);

  //Sabores disponibles
  const flavors = [
    "Vainilla",
    "Avellana",
    "Caramelo",
    "Menta",
    "Lavanda",
    "Miel",
  ];

  //Efecto para resetear estado cuando se abre un nuevo producto
  useEffect(() => {
    if (product) {
      setSelections({
        size: "Mediano",
        temp: product.defaultTemp || "Frío",
        milk: "Entera",
        flavor: null,
        ice: "Hielo normal",
        sweetness: "100% dulce",
        instructions: "",
      });
      setQuantity(1);
      setUnitPrice(product.basePrice);
    }
  }, [product, isOpen]);

  //Efecto para calcular precio dinámicamente
  useEffect(() => {
    if (!product) return;

    let extra = 0;
    if (selections.size === "Grande") extra += 15;
    if (selections.milk === "Avena" || selections.milk === "Almendra")
      extra += 10;
    if (selections.flavor) extra += 10;

    setUnitPrice(product.basePrice + extra);
  }, [selections, product]);

  const handleConfirm = () => {
    if (!product) return;
    const finalOrder = {
      ...product,
      ...selections,
      quantity,
      totalPrice: unitPrice * quantity,
    };
    onConfirm(finalOrder);
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-brown bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl flex flex-col">
        {/* Header fijo */}
        <div className="relative shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-yellow-500 text-4xl font-bold p-2 hover:text-yellow-300 transition"
          >
            X
          </button>
        </div>

        <div className="p-6 space-y-8 overflow-y-auto">
          {/* Información básica */}
          <section>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{product.description}</p>
          </section>

          {/* 1.Tamaño */}
          <section>
            <h3 className="font-bold mb-3">
              Tamaño <span className="text-red-500">*</span>
            </h3>
            <div className="flex gap-4">
              {["Mediano", "Grande"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSelections({ ...selections, size: s })}
                  className={`flex-1 py-2 border-2 rounded-lg transition ${selections.size === s ? "border-yellow-600 bg-yellow-50" : "border-gray-200"}`}
                >
                  {s} {s === "Grande" && "(+$15)"}
                </button>
              ))}
            </div>
          </section>

          {/* 2.Temperatura */}
          <section>
            <h3 className="font-bold mb-3">
              Temperatura <span className="text-red-500">*</span>
            </h3>
            <div className="flex gap-4">
              {["Frío", "Caliente"].map((t) => (
                <button
                  key={t}
                  disabled={product.fixedTemp && product.fixedTemp !== t}
                  onClick={() => setSelections({ ...selections, temp: t })}
                  className={`flex-1 py-2 border-2 rounded-lg ${
                    product.fixedTemp && product.fixedTemp !== t
                      ? "opacity-30 cursor-not-allowed"
                      : selections.temp === t
                        ? "border-yellow-600 bg-yellow-50"
                        : "border-gray-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </section>

          {/* 3.Leche */}
          <section>
            <h3 className="font-bold mb-3">
              Tipo de Leche <span className="text-red-500">*</span>
            </h3>
            <select
              className="w-full p-3 border-2 border-gray-200 rounded-lg"
              value={selections.milk}
              onChange={(e) =>
                setSelections({ ...selections, milk: e.target.value })
              }
            >
              <option value="Entera">Entera</option>
              <option value="Deslactosada">Deslactosada</option>
              <option value="Avena">Avena (+$10)</option>
              <option value="Almendra">Almendra (+$10)</option>
            </select>
          </section>

          {/* 4.Anadir sabor */}
          <section>
            <h3 className="font-bold mb-3">Añadir sabor (+$10)</h3>
            <div className="grid grid-cols-2 gap-2">
              {flavors.map((f) => (
                <button
                  key={f}
                  onClick={() =>
                    setSelections({
                      ...selections,
                      flavor: selections.flavor === f ? null : f,
                    })
                  }
                  className={`py-2 px-3 border rounded-lg text-sm transition ${selections.flavor === f ? "border-yellow-600 bg-yellow-50 font-medium" : "border-gray-200"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </section>

          {/* Nivel de Hielo(Solo si es frío) */}
          {selections.temp === "Frío" && (
            <section>
              <h3 className="font-bold mb-3 text-gray-800">
                Cantidad de Hielo
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Hielo normal", "Medio hielo", "Poco hielo", "Sin hielo"].map(
                  (h) => (
                    <button
                      key={h}
                      onClick={() => setSelections({ ...selections, ice: h })}
                      className={`px-4 py-2 rounded-full text-xs border ${selections.ice === h ? "bg-yellow-600 text-white" : "border-gray-300"}`}
                    >
                      {h}
                    </button>
                  ),
                )}
              </div>
            </section>
          )}

          {/* 6. Nivel de Dulzor */}
          <section>
            <h3 className="font-bold mb-3 text-gray-800">Nivel de Azúcar</h3>
            <div className="flex justify-between gap-1">
              {["100%", "50%", "25%", "0%"].map((d) => (
                <button
                  key={d}
                  onClick={() => setSelections({ ...selections, sweetness: d })}
                  className={`flex-1 py-2 text-sm border-b-2 ${selections.sweetness === d ? "border-yellow-600 text-yellow-600 font-bold" : "border-gray-100"}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </section>

          {/* 7. Instrucciones Especiales */}
          <section>
            <h3 className="font-bold mb-3 text-gray-800">
              Instrucciones Especiales
            </h3>
            <textarea
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-500 outline-none"
              placeholder="Ej. Sin popote, muy caliente, etc."
              rows="2"
              onChange={(e) =>
                setSelections({ ...selections, instructions: e.target.value })
              }
            />
          </section>
        </div>

        {/* Footer: Contador y Botón Final */}
        <div className="p-4 border-t bg-gray-50 flex items-center gap-4">
          <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden bg-white">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-gray-100 font-bold text-xl"
            >
              -
            </button>
            <span className="px-4 font-bold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 hover:bg-gray-100 font-bold text-xl"
            >
              +
            </button>
          </div>

          <button
            onClick={handleConfirm}
            className="flex-1 bg-yellow-600 text-white py-4 rounded-xl font-bold hover:bg-yellow-700 transition shadow-lg"
          >
            Agregar {quantity} al carrito — ${(unitPrice * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
