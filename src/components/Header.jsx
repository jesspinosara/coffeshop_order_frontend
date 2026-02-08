import logo from "../images/logo.png";
import carrito from "../images/carrito.png";
import "../blocks/header.css";

export default function Header() {
  return (
    <header className="header">
      {/* <img src={logo} className="header__logo" /> */}
      <h1>CAPU</h1>
      <img src={carrito} className="header__carrito" alt="carrito de compras" />
    </header>
  );
}
