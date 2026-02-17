import logo from "../images/logo.png";
import carrito from "../images/carrito.png";

export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-20 h-20 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="imagen de abeja" className="h-20 w-auto px-4" />
          <h1 className="text-l font-semibold px-1 tracking-wide">
            ORDENA TUS BEBIDAS
          </h1>
        </div>

        <div className="flex items-center gap-3 px-8">
          <button
            onClick={onOpenCart}
            className="flex items-center gap-4 rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-yellow-600 transition"
          >
            <img src={carrito} alt="carrito de compras" className="h-10 w-10" />

            <span
              className={`text-xl px-1 font-bold transition-transform ${cartCount > 0 ? "scale-110" : "scale-100"}`}
            >
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
