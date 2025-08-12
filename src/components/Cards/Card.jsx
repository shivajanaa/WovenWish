import React from "react";

export default function Card({ image, title, price }) {
  return (
    <div className="bg-[#FFFAEC] shadow-lg rounded-2xl p-4 w-70 h-80 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h3 className="mt-3 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-pink-500 font-bold text-lg mt-1">₹{price}</p>
     <a href="https://www.instagram.com/direct/t/17842842840551079/" target="_blank"
  rel="noopener noreferrer">
      <button className="mt-3 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl transition">
       DM to order
      </button></a> 
      {/* <InstagramDMButton/> */}
    </div>
  );
}
