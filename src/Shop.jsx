import React from "react";
import Header from "./Header";
import List from "./List";
import ProductSection from "./ProductSection";

export default function Shop() {
  return (
    <>
      <div className="bg-neutral-900 text-white">
        <Header />
        <List />
        <ProductSection />
      </div>
    </>
  );
}
