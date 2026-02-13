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
      <ul className="flex flex-row overflow-x-auto items-center no-scrollbar scroll-smooth gap-5 px-2 py-6 justify-center text-base font-medium text-gray-600 md:gap-20 md:px-20 lg:gap-40 lg:px-26 lg:py-6 lg:justify-center">
        {categories.map((category) => (
          <li key={category} className="shrink-0">
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
