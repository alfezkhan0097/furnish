// src/components/ProductSection.jsx
import React from "react";
import Product from "./Product";
import { products } from "./product/products";
const ProductSection = () => {
  const product = Object.values(products);
  return (
    <section id="shop" className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-neutral-200">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </section>
  );
};
export default ProductSection;
