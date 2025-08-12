import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

import CategoryCards from '../components/Cards/CategoryCards'

const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 })
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  )
}

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[90vh] px-5 sm:px-10 py-5 bg-[#FFE9E2] overflow-x-hidden relative">
        <FadeInSection className="h-[80%] flex justify-center items-center relative pt-20">
          {/* Left Image */}
          <FadeInSection delay={100} className="absolute left-2 sm:left-5 top-10 sm:top-20 z-10">
            <img
              className="h-24 sm:h-40 rotate-[350deg]"
              src="./images/ted.png"
              alt="Ted"
              loading="lazy"
            />
          </FadeInSection>
          {/* Right Image */}
          <FadeInSection delay={200} className="absolute right-2 sm:right-5 top-10 sm:top-20 z-10">
            <img
              className="h-24 sm:h-40 rotate-20"
              src="./images/rabbit.png"
              alt="Rabbit"
              loading="lazy"
            />
          </FadeInSection>
          {/* Hero Text */}
          <FadeInSection delay={300}>
            <h1 className="text-5xl sm:text-8xl text-white font-bold text-center max-w-full">
              Hand-Made With Love
            </h1>
          </FadeInSection>
        </FadeInSection>
      </section>

      {/* Products Section */}
      <section className="w-auto min-h-[100vh] px-5 sm:px-10 py-5 bg-[#FFE9E2]">
        <FadeInSection className="h-[90%] p-5 sm:p-10 bg-[#FFFAEC] rounded-2xl border border-transparent hover:border-[#8A553F] transition duration-500 shadow-md">
          <FadeInSection delay={0}>
            <Link to="/products">
              <h2 className="text-[#8A553F] text-3xl sm:text-4xl font-bold text-center mb-8 cursor-pointer hover:underline transition">
                Our Products
              </h2>
            </Link>
          </FadeInSection>
          <FadeInSection delay={200}>
            <CategoryCards />
          </FadeInSection>
        </FadeInSection>
      </section>

      {/* About Us Section */}
      <section className="w-auto px-5 sm:px-10 py-10 bg-[#FFE9E2]">
        <FadeInSection className="p-5 sm:p-10 bg-[#FFFAEC] rounded-2xl shadow-md border border-transparent hover:border-[#8A553F] transition duration-500">
          <FadeInSection delay={0}>
            <h2 className="text-[#8A553F] text-3xl sm:text-4xl font-bold text-center mb-6">
              About WovenWish
            </h2>
          </FadeInSection>
          <FadeInSection delay={100}>
            <p className="text-[#5A3E2B] text-lg leading-relaxed mb-4">
              Welcome to <span className="font-semibold">WovenWish</span> – where every creation begins with a thread and a vision.
              I’m the founder and sole artisan, based in Daspur, West Bengal, dedicated to bringing the art of crochet to life through high-quality, handmade pieces.
            </p>
          </FadeInSection>
          <FadeInSection delay={200}>
            <p className="text-[#5A3E2B] text-lg leading-relaxed mb-4">
              What started as a personal passion soon became a way to share meaningful, lasting creations with others. 
              Each product is made with precision, patience, and care – from cozy accessories and elegant home décor to thoughtful gifts that hold sentimental value.
            </p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <p className="text-[#5A3E2B] text-lg leading-relaxed mb-4">
              At WovenWish, I believe handmade means more than just crafting an item. It’s about preserving the authenticity of traditional skills, 
              infusing each piece with individuality, and creating something you can cherish for years to come.
            </p>
          </FadeInSection>
          <FadeInSection delay={400}>
            <p className="text-[#5A3E2B] text-lg leading-relaxed">
              When you choose WovenWish, you’re not only supporting a small, independent business – you’re taking home something made with dedication, 
              heart, and a personal touch that no machine can replicate.
              <br />
              <br />
              Every stitch tells a story – let me weave yours.
            </p>
          </FadeInSection>
        </FadeInSection>
      </section>
    </>
  )
}

export default HomePage
