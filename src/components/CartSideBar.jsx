import React from "react";
import deleteIcon from "../images/trashbutton.png";

export default function CartSideBar({
  cart,
  isOpen,
  onClose,
  updateCartQuantity,
  removeFromCart,
}) {
  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full max-w-md bg-white text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white/90 flex justify-between items-center bg-yellow-300/20">
            <h2 className="text-2xl font-bold text-yellow-500">Tu Orden</h2>
            <button
              onClick={onClose}
              className="text-yellow-500 text-4xl font-bold hover:text-white transition"
            >
              X
            </button>
          </div>

          {/* Lista productos */}
          <div className="p-6 flex-1 overflow-y-auto space-y-6 custom-scrollbar">
            {cart.length === 0 ? (
              <p className="text-gray-400 text-center mt-10 italic">
                Tu carrito está vacío. ¡Agrega tus bebidas favoritas para
                comenzar tu orden!
              </p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col border-b border-white pb-6 gap-3"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-yellow-500">
                        {item.quantity}x {item.name}
                      </h4>
                      <div className="text-xs text-gray-500 mt-1 space-y-1">
                        <p>
                          {item.size} • {item.temp} • Leche:{item.milk}
                        </p>
                        <p>
                          {item.ice} | Azúcar:{item.sweetness}{" "}
                          {item.flavor && ` | Sabor: ${item.flavor}`}
                        </p>
                      </div>
                      {item.instructions && (
                        <p className="text-xs italic text-yellow-700 mt-2 bg-yellow-700/10 p-2 rounded">
                          "{item.instructions}"
                        </p>
                      )}
                    </div>
                    <p className="font-semibold text-gray-500 text-lg ml-2">
                      ${item.totalPrice.toFixed(2)}
                    </p>
                  </div>

                  {/* Controles de cantidad y eliminación */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border border-gray-400 rounded-xl overflow-hidden bg-yellow-600">
                      <button
                        onClick={() => updateCartQuantity(index, -1)}
                        className="px-4 py-1 transition font-bold text-lg"
                      >
                        -
                      </button>
                      <span className="px-3 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(index, 1)}
                        className="px-4 py-1 transition font-bold text-lg"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="p-2 rounded-full transition group"
                    >
                      <img
                        src={deleteIcon}
                        alt="Eliminar"
                        className="h-6 w-6 brightness-100 group-hover:scale-100 transition"
                      />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Total y botón de checkout */}
          <div className="p-6 border-t border-white/10 bg-yellow-300/30 space-y-4">
            <div className="flex justify-between text-2xl font-bold text-yellow-700">
              <span>Total:</span>
              <span>${total.toFixed(2)} MXN</span>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-gray-400 text-xs text-center leading-relaxed">
                ¡Tu orden está casi lista! Para finalizar tu compra, por favor
                dirígete a la caja y recoge tu bebida en barra. ¡Gracias por
                elegirnos!
              </p>
            </div>

            <button
              disabled={cart.length === 0}
              className="w-full bg-yellow-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-yellow-700 transition-all shadow-lg active:scale-95 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => alert("Orden enviada a barista")}
            >
              {" "}
              Confirmar y enviar orden{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
