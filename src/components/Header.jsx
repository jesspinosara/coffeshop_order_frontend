import logo from "../images/logo.png";
import carrito from "../images/carrito.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 h-20 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="imagen de abeja" className="h-20 w-auto px-6" />
          <h1 className="text-xl font-semibold px-10 tracking-wide">
            ORDENA TUS BEBIDAS
          </h1>
        </div>

        <div className="flex items-center gap-3 px-8">
          <button className="flex items-center gap-4 rounded-full bg-[#E58904] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#E58904]/60 transition">
            <img src={carrito} alt="carrito de compras" className="h-10 w-10" />
            <span className="text-xl px-1">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
