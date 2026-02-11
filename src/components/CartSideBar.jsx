import React from "react";

export default function CartSideBar({ cart, isOpen, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b flex justify-between items-center bg-gray-50">
            <h2 className="text-2xl font-bold">Tu Orden</h2>
            <button
              onClick={onClose}
              className="text-gray-500 text-2xl font-bold hover:text-gray-300 transition"
            >
              X
            </button>
          </div>

          {/* Lista productos */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">
                Tu carrito está vacío
              </p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex justify-between border-b pb-4">
                  <div>
                    <h4 className="font-bold">
                      {item.quantity}x {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.size}, {item.temp}, {item.milk}
                      {item.flavor && `, Sabor: ${item.flavor}`}{" "}
                    </p>
                    {item.instructions && (
                      <p className="text-sm italic text-orange-500">
                        Instrucciones: {item.instructions}
                      </p>
                    )}
                  </div>
                  <p className="font-semibold">${item.totalPrice.toFixed(2)}</p>
                </div>
              ))
            )}
          </div>

          {/* Total y botón de checkout */}
          <div className="p-6 border-t space-y-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)} MXN</span>
            </div>

            <div className=" p-4 text-center">
              <p className="text-gray-500 text-sm font-medium">
                ¡Tu orden está casi lista! Para finalizar tu compra, por favor
                dirígete a la caja y recoge tu bebida en barra. ¡Gracias por
                elegirnos!
              </p>
            </div>

            <button
              disabled={cart.length === 0}
              className="w-full bg-yellow-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition disabled:bg-gray-300"
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
