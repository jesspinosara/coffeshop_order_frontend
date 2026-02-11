import React, { useState } from "react";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import Main from "./Main.jsx";
import ProductModal from "./ProductModal.jsx";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const addToCart = (orderItem) => {
    setCart([...cart, orderItem]);
    setIsModalOpen(false);
    console.log("Carrito actualizado:", [...cart, orderItem]);
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <NavBar />
      <Main onProductClick={handleOpenModal} />
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={addToCart}
      />
    </div>
  );
}
