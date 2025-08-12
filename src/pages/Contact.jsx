import React from 'react'
import { useInView } from 'react-intersection-observer'

// Reusable fade-in animation wrapper
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

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#FFE9E2] px-5 sm:px-10 py-10 flex justify-center items-center">
      <div className="bg-[#FFFAEC] rounded-2xl shadow-md border border-transparent hover:border-[#8A553F] transition duration-500 p-6 sm:p-10 max-w-3xl w-full">
        
        {/* Heading */}
        <FadeInSection delay={0}>
          <h1 className="text-[#8A553F] text-3xl sm:text-4xl font-bold text-center mb-6">
            Contact Us
          </h1>
        </FadeInSection>
        
        {/* Description */}
        <FadeInSection delay={100}>
          <p className="text-[#5A3E2B] text-lg leading-relaxed text-center mb-8">
            Have a question, custom order request, or just want to say hello?  
            Fill out the form below and I’ll get back to you as soon as possible.  
            Your messages mean the world to me! 💌
          </p>
        </FadeInSection>

        {/* Contact Form */}
        <form className="space-y-5">
          <FadeInSection delay={200}>
            <label className="block">
              <span className="text-[#8A553F] font-semibold">Name</span>
              <input
                type="text"
                placeholder="Your full name"
                className="mt-1 block w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A553F] transition"
              />
            </label>
          </FadeInSection>

          <FadeInSection delay={300}>
            <label className="block">
              <span className="text-[#8A553F] font-semibold">Email</span>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1 block w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A553F] transition"
              />
            </label>
          </FadeInSection>

          <FadeInSection delay={400}>
            <label className="block">
              <span className="text-[#8A553F] font-semibold">Message</span>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="mt-1 block w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A553F] transition"
              ></textarea>
            </label>
          </FadeInSection>

          <FadeInSection delay={500}>
            <button
              type="submit"
              className="w-full bg-[#8A553F] text-white py-3 rounded-xl hover:bg-[#704431] transition transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </FadeInSection>
        </form>

        {/* Social Links */}
       

      </div>
    </section>
  )
}

export default Contact
