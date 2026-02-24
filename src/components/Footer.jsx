import PaletaColor from "../images/paletacolor.png";

export default function Footer() {
  return (
    <footer
      className="relative mt-20 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${PaletaColor})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 px-6 py-16 text-center">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">
            Nuestra ubicación y horarios
          </h2>
          <p className="mt-4 text-sm opacity-90">
            Calle Falsa 123, Ciudad Ejemplo
          </p>
          <p className="mt-6 text-sm opacity-90">
            Lunes a Viernes: 8:00 AM - 8:00 PM
          </p>
          <p className="mt-1 text-sm opacity-90">
            Sábados y Domingos: 9:00 AM - 6:00 PM
          </p>
        </div>

        <p className="mt-4 text-xs opacity-80">
          © 2026 CAPU x Jessica Espinosa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
