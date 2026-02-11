import products from "../utils/data.js";
import ProductCard from "./ProductCard.jsx";

const categories = ["Café", "Café con leche", "Sin café", "Los diferentes"];

export default function Main({ onProductClick }) {
  const formatId = (name) => name.split(" ").join("-");

  return (
    <main className="px-40 pb-24">
      {categories.map((category) => (
        <section
          key={category}
          id={formatId(category)}
          style={{ scrollMarginTop: "150px" }}
          className="mt-16 pt-20"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">
            {category}
          </h2>

          <div className="grid justify-center gap-10 sm:grid-cols-2 md:grid-cols-3">
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={() => onProductClick(product)}
                />
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
