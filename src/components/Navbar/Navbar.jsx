import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-[15vh] w-[100%] mx-auto px-3 bg-[#FFFAEC] text-[#8A5560] sticky top-0 z-50 shadow-lg flex items-center rounded-2xl"
    >
      <div className="w-full mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img className="w-20" src="/images/logo.png" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:border-b-2 transition-colors ${
                    isActive ? "border-b-2 font-bold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button with "X" Animation */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-[#8A5560] rounded"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-[#8A5560] rounded"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-[#8A5560] rounded"
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
     <AnimatePresence>
  {isOpen && (
    <motion.ul
      key="mobile-menu"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="md:hidden absolute top-[12vh] left-0 w-full bg-[#FFFAEC] text-[#8A5560] space-y-2 px-4 py-3 rounded-b-2xl shadow-md overflow-hidden z-40"
    >
      {navLinks.map((link) => (
        <motion.li
          key={link.name}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `block py-2 border-b border-[#EACDC2] last:border-none transition-colors ${
                isActive
                  ? "font-bold border-b-2 border-[#8A5560]"
                  : "hover:border-b-2 hover:border-[#8A5560]"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        </motion.li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>

    </motion.nav>
  );
}
