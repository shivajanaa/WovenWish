import React, { useState } from "react";

function ActionButton({ children, onClick, className = "", ariaLabel }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-2xl font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition transform hover:scale-[1.02] active:scale-[0.99] ${className}`}
    >
      {children}
    </button>
  );
}

export default function ProductCard({
  image,
  title = "Handmade Crochet Item",
  price = 0,
  currency = "INR",
  sizes = [],
  description = "Cute, soft and handmade with love.",
  onAddToCart = () => {},
}) {
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0] || null);

  return (
    <article
      className="max-w-xs bg-[#FFFAEC] rounded-3xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300"
      aria-label={title}
    >
      <div className="relative w-full overflow-hidden rounded-2xl bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/85 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold shadow">
          Handmade
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">Price</span>
            <div className="text-xl font-bold text-gray-900">
              {currency} {price}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-1 bg-white rounded-full px-2 py-1 shadow-sm">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-7 h-7 grid place-items-center rounded-full text-gray-600 hover:bg-gray-100"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <div className="w-8 text-center font-medium">{qty}</div>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-7 h-7 grid place-items-center rounded-full text-gray-600 hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {sizes.length > 0 && (
          <div className="mt-3">
            <div className="text-sm text-gray-500 mb-2">Size</div>
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition hover:scale-105 focus:ring-2 focus:ring-offset-1 focus:ring-[#FFE3C8] ${
                    selectedSize === s ? "bg-[#FFE9E2] text-gray-900 shadow" : "bg-white text-gray-700"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 flex gap-3">
          <ActionButton
            onClick={() => onAddToCart(qty, selectedSize)}
            className="bg-[#FFDACF] text-gray-900 flex-1"
            ariaLabel="Add to cart"
          >
            Add to cart
          </ActionButton>
          <ActionButton
            onClick={() => alert("Added to wishlist")}
            className="bg-white text-gray-700 shadow-sm w-12 h-12 p-0"
            ariaLabel="Save to wishlist"
          >
            ❤️
          </ActionButton>
        </div>
      </div>
    </article>
  );
}
