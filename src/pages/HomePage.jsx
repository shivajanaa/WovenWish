import React from 'react'
import { Link } from 'react-router-dom'
import ProductCarousel from '../components/Carsouel/ProductCarousel'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-[90vh] px-5 sm:px-10 py-5 bg-[#FFE9E2] overflow-x-hidden relative">
        <div className="h-[80%] flex justify-center items-center relative pt-20">
          {/* Images with subtle rotate and fade-in animation */}
          <a href="App.jsx" className="absolute  left-2 sm:left-5 top-10 sm:top-20 z-10 animate-fadeIn">
            <img
              className="h-24 sm:h-40 rotate-[350deg]"
              src="./images/ted.png"
              alt="Ted"
              loading="lazy"
            />
          </a>
          <img
            className="h-24 sm:h-40 absolute right-2 sm:right-5 top-10 sm:top-20 z-10 rotate-20 animate-fadeIn delay-200"
            src="./images/rabbit.png"
            alt="Rabbit"
            loading="lazy"
          />
          {/* Hero Text with fade-in and scale on load */}
          <h1 className="text-5xl sm:text-8xl text-white font-bold absolute z-10 ml-1 mt-2 text-center max-w-full animate-fadeInScale">
            Hand-Made With Love
          </h1>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-auto min-h-[100vh] px-5 sm:px-10 py-5 bg-[#FFE9E2]">
        <div className="h-[90%] p-5 sm:p-10 bg-[#FFFAEC] rounded-2xl border border-transparent hover:border-[#8A553F] transition duration-500 shadow-md">
          <Link to="/products">
            <h2 className="text-[#8A553F] text-3xl sm:text-4xl font-bold text-center mb-8 cursor-pointer hover:underline transition">
              Our Products
            </h2>
          </Link>
          <ProductCarousel />
        </div>
      </div>

      {/* Tailwind animation styles (add these to your global CSS if not already present) */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .animate-fadeInScale {
            animation: fadeInScale 1s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </>
  )
}

export default HomePage
