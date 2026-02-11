import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h2 className="footer__title">Nuestra ubicación y horarios</h2>
        <p className="footer__info">Calle Falsa 123, Ciudad Ejemplo</p>
        <p className="footer__info">Lunes a Viernes: 8:00 AM - 8:00 PM</p>
        <p className="footer__info">Sábados y Domingos: 9:00 AM - 6:00 PM</p>
      </div>
      <p className="footer__copyright">
        © 2026 CAPU x Jessica Espinosa. All rights reserved.
      </p>
    </footer>
  );
}
