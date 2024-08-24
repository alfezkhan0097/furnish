import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const List = () => {
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  //just change the var below to change the header list
  const list = [
    {
      title: "Sofas",
      lists: ["U Shaped", "L Shaped", "Set"],
    },
    {
      title: "Armchairs",
      lists: ["Armchairs", "Couchs", "Poufs"],
    },
    {
      title: "Beds",
      lists: ["Fullsized Beds", "Single Beds", "Bunk Beds"],
    },
    {
      title: "Wardrobes",
      lists: ["Up To 100cm", "100cm To 200cm", "More Than 200cm"],
    },
    {
      title: "Dining Rooms",
      lists: ["Tables", "Chairs", "Complete set", "Stools"],
    },
    {
      title: "Others",
      lists: ["TV Benches", "Coffe table", "Varandas"],
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-6 justify-center pb-6">
        {list.map((item, index) => (
          <Popover key={index} className="relative group">
            <PopoverButton className="block text-lg font-semibold text-neutral-500 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white borderef  ">
              {item.title}
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="absolute z-10 mt-2 divide-y divide-gray-200 rounded-xl bg-black/50 shadow-lg text-sm transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="p-4">
                {item.lists.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    className="block rounded-lg py-2 px-3 transition group hover:bg-yellow-400"
                    href="#"
                  >
                    <p className="font-semibold text-gray-200 group-hover:text-neutral-800">
                      {subItem}
                    </p>
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        ))}
      </div>
      <ul className="flex space-x-4 pb-8 text-neutral-500 font-semibold">
        <li className="group hover:text-white relative cursor-pointer">
          <a className="borderef" onClick={() => handleClick("home")}>
            Home
          </a>
        </li>
        <li className="group relative hover:text-white cursor-pointer">
          <a className="borderef " onClick={() => handleClick("shop")}>
            Products
          </a>
        </li>
        <li className="group relative hover:text-white cursor-pointer">
          <a className="borderef" onClick={() => handleClick("us")}>
            About Us
          </a>
        </li>
        <li className="group relative hover:text-white cursor-pointer">
          <a className="borderef" onClick={() => handleClick("contact")}>
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default List;
