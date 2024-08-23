// components/HomePage.js
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ProductSection from "./ProductSection";
import HeroWithPagination from "./HeroWithPagination";
import TrendingCategory from "./TrendingCatagory";
import Showcase from "./Showcase";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import TestimonialSection from "./TestimonialSection";
import List from "./List";
import Contact from "./Contact";

function HomePage() {
  return (
    <>
      <div className="text-white relative">
        <div className="absolute top-0 left-0 inset-0 bg-[url(/bg.jpg)] -z-10 blur-lg filter brightness-[0.2] backdrop-brightness-0"></div>
        <div className="shadow-md">
          <Header />
          <List />
        </div>
        <Hero />
        <Showcase />
        <ProductSection />
        <HeroWithPagination />
        <TrendingCategory />
        <TestimonialSection />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
