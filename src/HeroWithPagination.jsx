// src/components/HeroWithPagination.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
const slides = [
  {
    title: "Design for your Comfort",
    imageUrl:
      "https://furniturehaven.co.uk/cdn/shop/files/WARDROBE-_1.png?v=1697892075",
    color: "text-black",
  },
  {
    title: "Steam in with our Modern TV benches",
    imageUrl:
      "https://furniturehaven.co.uk/cdn/shop/files/TV-Benches.png?v=1697892910",
    color: "text-white",
  },
];

const HeroWithPagination = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
    );
  };

  return (
    <section
      className="relative group overflow-hidden h-[580px] bg-cover bg-center bg-no-repeat transition-all duration-300"
      style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
    >
      <div
        className={`container mx-auto h-full flex flex-col items-end mt-24 text-white`}
      >
        <h1 className={`text-4xl font-bold mb-4 ${slides[currentSlide].color}`}>
          {slides[currentSlide].title}
        </h1>
        <Link
          to="/shop"
          className="px-6 py-3 bg-neutral-800/40 text-white rounded-lg hover:bg-neutral-950"
        >
          Shop Now
        </Link>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-[50%] left-8 translate-y-[-50%] invisible p-4 aspect-square text-white rounded-lg group-hover:visible bg-neutral-800/40 cursor-pointer hover:bg-neutral-950"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="translate-x-[15%]"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#e8eaed"
        >
          <path d="M384-96 0-480l384-384 68 68-316 316 316 316-68 68Z" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-[50%] right-8 translate-y-[-50%] p-4 aspect-square invisible text-white rounded-lg group-hover:visible bg-neutral-800/40 hover:bg-neutral-950"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#e8eaed"
        >
          <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z" />
        </svg>
      </button>
    </section>
  );
};

export default HeroWithPagination;
