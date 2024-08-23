// src/components/TrendingCategory.jsx
import React from "react";

const products = [
  {
    id: "a",
    name: "Wall",
    imageUrl:
      "https://furniturehaven.co.uk/cdn/shop/files/wall-u_400x.png?v=1698053520",
    span: "",
  },
  {
    id: "b",
    name: "Chest Of Drawers",
    imageUrl:
      "https://furniturehaven.co.uk/cdn/shop/files/Chest-of-drawers2_600x.png?v=1698040776",
    span: "col-span-2 row-span-2",
  },
  {
    id: "c",
    name: "Office",
    imageUrl:
      "https://furniturehaven.co.uk/cdn/shop/files/office-desk_400x.png?v=1698041790",
    span: "",
  },
  {
    id: "d",
    name: "Coffe",
    imageUrl:
      "https://furniturehaven.co.uk/cdn/shop/files/coffee-table_400x.png?v=1698041146",
    span: "",
  },
  {
    id: "e",
    name: "Kitchens",
    imageUrl:
      "https://furniturehaven.co.uk/cdn/shop/files/kitchen2_400x.png?v=1698042107",
    span: "",
  },
];

const TrendingCategory = () => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Trending Categories
      </h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative ${product.span} aspect-square overflow-hidden`}
          >
            <div
              className="absolute -z-0 inset-0 bg-center bg-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              style={{ backgroundImage: `url(${product.imageUrl})` }}
            ></div>
            <div className="relative p-4 text-white font-bold text-lg">
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategory;
//<div className="absolute inset-0 bg-black bg-opacity-25"></div>
