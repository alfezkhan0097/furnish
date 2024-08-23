// src/components/ProductSection.jsx
import React from "react";
import Product from "./Product";
import { products } from "./product/products";
const ProductSection = () => {
  // const products = [
  //   {
  //     image:
  //       "https://furniturehaven.co.uk/cdn/shop/files/wall-unit-halo.jpg?v=1697965683",
  //     title: "Wall Unit Halo",
  //     price: "449.99",
  //   },
  //   {
  //     image:
  //       "https://furniturehaven.co.uk/cdn/shop/files/shoe-cabinet-kas.jpg?v=1697972235",
  //     title: "Shoe Cabinet Kas",
  //     price: "129.99",
  //   },
  //   {
  //     image:
  //       "https://furniturehaven.co.uk/cdn/shop/files/kitchen-furniture-set-ela_3.jpg?v=1697974592",
  //     title: "Kitchen Furniture Set",
  //     price: "379.99",
  //   },
  //   {
  //     image:
  //       "https://furniturehaven.co.uk/cdn/shop/files/gilda-set_1.jpg?v=1697969151",
  //     title: "Gilda Set",
  //     price: "899.99",
  //   },
  //   {
  //     image: "https://furniturehaven.co.uk/cdn/shop/files/faramundo-tv-bench.jpg?v=1697966974",
  //     title: "Faramandu TV Bench",
  //     price: "179.99",
  //   },
  //   {
  //     image: "https://furniturehaven.co.uk/cdn/shop/files/corner-sofa-bed-aris_1.jpg?v=1698069399",
  //     title: "corner Sofa Bed Aris",
  //     price: "999.99",
  //   },
  //   {
  //     image: "https://furniturehaven.co.uk/cdn/shop/files/coffee-tabble-optima.jpg?v=1697967206",
  //     title: "Coffee Table Optima",
  //     price: "149.99",
  //   },
  //   {
  //     image: "https://furniturehaven.co.uk/cdn/shop/files/chest-of-drawers-wenecja_4fd31b27-2973-458d-bdb8-278b390cc22a.jpg?v=1698068946",
  //     title: "Chest Of Drawers Wanekja",
  //     price: "249.99",
  //   },
  //   // Add more products as needed
  // ];
  const product = Object.values(products);
  return (
    <section className="container mx-auto px-4 py-8">
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
