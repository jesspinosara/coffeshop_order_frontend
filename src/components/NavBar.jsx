import React from "react";

const categories = ["Café", "Café con leche", "Sin café", "Los diferentes"];

export default function NavBar() {
  const scrollToCategory = (categoryName) => {
    console.log("Intentando hacer scroll a categoría:", categoryName);

    const sectionId = categoryName.split(" ").join("-");
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("No se encontró el elemento con ID:", sectionId);
    }
  };

  return (
    <nav className="sticky top-18 z-10 bg-white shadow-lg">
      <ul className="flex gap-40 overflow-x-auto px-50 py-6 text-base font-medium text-gray-600">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => scrollToCategory(category)}
              className="whitespace-nowrap pb-2 border-b-2 border-transparent 
                        hover:border-orange-500 hover:text-orange-500 transition"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
