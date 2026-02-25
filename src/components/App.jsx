import React, { useState } from "react";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import Main from "./Main.jsx";
import ProductModal from "./ProductModal.jsx";
import Footer from "./Footer.jsx";
import CartSideBar from "./CartSideBar.jsx";
import OrderConfirmModal from "./OrderConfirmModal.jsx";
import { createOrder } from "../utils/api.js";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const addToCart = (orderItem) => {
    setCart((prevCart) => [...prevCart, orderItem]);
    setIsModalOpen(false);
  };

  const updateCartQuantity = (index, delta) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const item = { ...newCart[index] };

      const newQuantity = item.quantity + delta;
      if (newQuantity > 0) {
        item.quantity = newQuantity;

        const unitPrice = item.totalPrice / (item.quantity - delta);
        item.totalPrice = unitPrice * newQuantity;

        newCart[index] = item;
        return newCart;
      }
      return prevCart;
    });
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleFinalOrder = (userData) => {
    const orderData = {
      name: userData.name,
      email: userData.email,
      drinkName: cart
        .map((item) => `${item.quantity}x ${item.name}`)
        .join(", "),
      totalPrice: cartTotal,
      selections: cart[0],
    };

    createOrder(orderData)
      .then(() => {
        alert(`¡Gracias ${userData.name}! Tu pedido ha sido enviado.`);
        setCart([]);
        setIsConfirmModalOpen(false);
        setIsCartOpen(false);
      })
      .catch((err) => {
        console.error("Error en la orden:", err);
        alert("No se pudo conectar con el servidor");
      });
  };

  return (
    <div>
      <Header cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />
      <NavBar />
      <Main onProductClick={handleOpenModal} />
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={addToCart}
      />

      <CartSideBar
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        onCheckout={() => setIsConfirmModalOpen(true)}
      />

      <OrderConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        total={cartTotal.toFixed(2)}
        onConfirm={handleFinalOrder}
      />

      <Footer />
    </div>
  );
}
