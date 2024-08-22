import React from "react";

const products = [
  {
    id: "a",
    name: "Product A",
    imageUrl: "https://furniturehaven.co.uk/cdn/shop/files/bed3_e3add4a2-4b3c-499d-957b-99dc98004c60_600x.png?v=1698043726",
    span: "col-span-1 ",
    aspect: "aspect-[2/1]"
  },
  {
    id: "b",
    name: "Product B",
    imageUrl: "https://furniturehaven.co.uk/cdn/shop/files/Armchairs_600x.png?v=1698043608",
    span: "col-span-1 row-span-2",
    aspect: "aspect-square"

  },
  {
    id: "c",
    name: "Product C",
    imageUrl: "https://furniturehaven.co.uk/cdn/shop/files/sofs_600x.png?v=1698043891",
    span: "",
    aspect: "aspect-[2/1]"

  },
];

const Showcase = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative ${product.aspect} ${product.span} overflow-hidden bg-cover bg-center`}
          >
            <div className="absolute -z-0 inset-0 bg-center bg-cover transition-transform duration-300 ease-in-out transform hover:scale-110" style={{ backgroundImage: `url(${product.imageUrl})` }}>
            </div>
            <div className="p-4 absolute z-10 text-white font-bold text-lg">
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
//<div className="absolute inset-0 bg-black bg-opacity-25"></div>
