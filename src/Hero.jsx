// src/components/Hero.jsx
import React from "react";
import { useState } from "react";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Everything Your home deserves",
      left: "left-[0%]",
      description:
        "Find the perfect furniture pieces to elevate your living space.",
      imageUrl:
        "https://furniturehaven.co.uk/cdn/shop/files/sofa2_a5643d27-73af-4159-a09d-63d6f69cea31.png?v=1697882825",
    },
    {
      title: "Bedroom Furniture Sale",
      left: "left-[-25%]",
      description:
        "Get the best deals on stylish and comfortable bedroom sets.",
      imageUrl:
        "https://furniturehaven.co.uk/cdn/shop/files/bed.png?v=1697883514",
    },
    {
      title: "Modern Office Essentials",
      left: "left-[-12%]",
      description:
        "Upgrade your workspace with modern and ergonomic furniture.",
      imageUrl:
        "https://furniturehaven.co.uk/cdn/shop/files/sofa-chair.png?v=1698055680",
    },
    {
      title: "Modern Office Essentials",
      left: "left-[0%]",
      description:
        "Upgrade your workspace with modern and ergonomic furniture.",
      imageUrl:
        "https://furniturehaven.co.uk/cdn/shop/files/WARDROBE2.png?v=1697888228",
    },
  ];
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
      className="relative group overflow-hidden h-screen bg-cover bg-center bg-no-repeat transition-all duration-300"
      style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
    >
      <div
        className={`absolute ${slides[currentSlide].left} top-[-10%] transition-all duration-300 container mx-auto h-full flex flex-col justify-center items-center text-center text-white`}
      >
        <h1 className="text-4xl font-bold mb-4">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg mb-6">{slides[currentSlide].description}</p>
        <a
          href="/shop"
          className="px-6 py-3 bg-neutral-800/40 text-white rounded-lg hover:bg-neutral-950"
        >
          Shop Now
        </a>
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

export default Hero;
