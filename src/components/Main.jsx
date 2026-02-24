import products from "../utils/data.js";
import ProductCard from "./ProductCard.jsx";

const categories = ["Café", "Café con leche", "Sin café", "Los diferentes"];

export default function Main({ onProductClick }) {
  const formatId = (name) => name.split(" ").join("-");

  return (
    <main className="px-4 md:px-20 lg:px-30 pb-20">
      {categories.map((category) => (
        <section
          key={category}
          id={formatId(category)}
          style={{ scrollMarginTop: "250 px" }}
          className="mt-20 scroll-mt-40px"
        >
          <h2 className="text-3xl font-bold ml-6 mb-15 border-l-8 border-orange-500 pl-8">
            {category}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
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
