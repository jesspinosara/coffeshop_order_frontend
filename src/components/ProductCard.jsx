export default function ProductCard({ product, onProductClick }) {
  return (
    <div>
      <button
        onClick={() => onProductClick(product)}
        className="flex flex-col rounded-4xl bg-yellow-500 p-6 w-65 min-h-50 text-left shadow-md transition hover:scale-[1.03] hover:shadow-lg"
      >
        <div className="mb-3 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-50 w-50 object-contain rounded-xl"
          />
        </div>
        <h3 className="text-xl font-semibold text-[#3C2816]">{product.name}</h3>
        <p className="mt-2 text-sm text-[#4A311C]/70 line-clamp-2">
          {product.description}
        </p>

        <span className="mt-2 text-xl font-bold text-orange-900">
          ${product.basePrice}
        </span>
      </button>
    </div>
  );
}
