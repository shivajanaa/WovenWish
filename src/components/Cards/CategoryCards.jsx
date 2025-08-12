import React from "react";
import { Link } from "react-router-dom"; // If using React Router

const categories = [
  { name: "Toys", image: "/images/Productimages/toys.jpeg", link: "/products#toys" },
  { name: "Key Chains", image: "/images/Productimages/keychains.jpg", link: "/products#flowers" },
  { name: "Accessories", image: "/images/Productimages/hair.webp", link: "/products#accessories" },
  { name: "Bags", image: "/images/Productimages/bags.jpg", link: "/products#bags" },
  { name: "Home Decoration", image: "/images/Productimages/homedecor.jpg", link: "/products#homedecoration" },
  { name: "Flowers", image: "/images/Productimages/flowers.jpeg", link: "/products#flowers" }
  
];

export default function CategoryCards() {
  return (
    <>
    <div className="bg-[#FFFAEC] py-10">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12">
        {categories.map((category) => (
          <Link
            to={category.link}
            key={category.name}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
