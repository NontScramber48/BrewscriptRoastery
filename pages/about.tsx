import Link from "next/link";
import "../styles/globals.css";
import React from "react";

const products = [
  {
    id: 1,
    name: "ปางขอน 250 G",
    href: "#",
    price: "150 THB",
    description: "คั่วอ่อน",
    imageSrc: "/assets/images/business/light.webp",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "ปางขอน 250 G",
    href: "#",
    price: "150 THB",
    description: "คั่วกลาง",
    imageSrc: "/assets/images/business/md.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "ปางขอน 250 G",
    href: "#",
    price: "150 THB",
    description: "คั่วเข้ม",
    imageSrc: "/assets/images/business/dark.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // More products...
];
export default function vission() {
  return (
    <div className="bg-white ">
      <nav className="bg-orange-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white text-xl font-bold">Brewscript</div>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="about" className="text-white hover:text-gray-200">
                  about
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">
                  {product.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
