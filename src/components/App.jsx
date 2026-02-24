import React, { useState } from "react";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import Main from "./Main.jsx";
import ProductModal from "./ProductModal.jsx";
import Footer from "./Footer.jsx";
import CartSideBar from "./CartSideBar.jsx";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const addToCart = (orderItem) => {
    setCart((prevCart) => [...prevCart, orderItem]);
    setIsModalOpen(false);
    console.log("Carrito actualizado:", [...cart, orderItem]);
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
      />
      <Footer />
    </div>
  );
}
