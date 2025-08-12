import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Products",
    path: "/products",
    submenu: [
      { name: "Toys", hash: "#toys" },
      { name: "Home Decor", hash: "#homedecor" },
      { name: "Bags", hash: "#bags" },
      { name: "Accessories", hash: "#accessories" },
      { name: "Fashion", hash: "#fashion" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const navigate = useNavigate();

  // Navigate to /products and scroll to section hash
  const handleSubmenuClick = (hash) => {
    navigate(`/products${hash}`);
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    setDesktopDropdownOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-[#FFFAEC] shadow-lg rounded-2xl"
    >
      <div className="flex items-center justify-between h-[15vh] max-w-7xl mx-auto px-4 md:px-8 text-[#8A5560]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="w-20" src="/images/logo.png" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center relative">
          {navLinks.map(({ name, path, submenu }) => {
            if (submenu) {
              return (
                <li
                  key={name}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <motion.div
                    className={`cursor-pointer select-none font-medium ${
                      window.location.pathname.startsWith("/products")
                        ? "border-b-2 font-bold border-[#8A5560]"
                        : "hover:border-b-2 hover:border-[#8A5560]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {name}
                  </motion.div>

                  <AnimatePresence>
                    {isDesktopDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-0 mt-2 w-44 bg-[#FFFAEC] border border-[#8A5560] rounded-md shadow-lg z-50"
                      >
                        {submenu.map(({ name: subName, hash }) => (
                          <li key={subName} className="border-b last:border-none">
                            <button
                              onClick={() => handleSubmenuClick(hash)}
                              className="w-full text-left px-4 py-2 hover:bg-[#EACDC2] transition-colors font-normal text-sm"
                            >
                              {subName}
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <motion.li
                key={name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive
                        ? "border-b-2 font-bold border-[#8A5560]"
                        : "hover:border-b-2 hover:border-[#8A5560]"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-[#8A5560] rounded"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-[#8A5560] rounded"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-[#8A5560] rounded"
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#FFFAEC] text-[#8A5560] shadow-md rounded-b-2xl overflow-hidden px-4 py-3"
          >
            {navLinks.map(({ name, path, submenu }) => {
              if (submenu) {
                return (
                  <li key={name} className="border-b border-[#EACDC2] last:border-none">
                    <button
                      className="w-full flex justify-between items-center py-2 font-medium"
                      onClick={() => setMobileDropdownOpen((prev) => !prev)}
                      aria-expanded={isMobileDropdownOpen}
                      aria-controls="mobile-submenu"
                    >
                      {name}
                      <motion.span
                        animate={{ rotate: isMobileDropdownOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block"
                      >
                        ▶
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isMobileDropdownOpen && (
                        <motion.ul
                          id="mobile-submenu"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          {submenu.map(({ name: subName, hash }) => (
                            <li key={subName}>
                              <button
                                onClick={() => handleSubmenuClick(hash)}
                                className="block w-full text-left py-2 border-b border-[#EACDC2] last:border-none hover:border-b-2 hover:border-[#8A5560] transition-colors font-normal text-sm"
                              >
                                {subName}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li
                  key={name}
                  className="border-b border-[#EACDC2] last:border-none"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 transition-colors font-medium ${
                        isActive
                          ? "font-bold border-b-2 border-[#8A5560]"
                          : "hover:border-b-2 hover:border-[#8A5560]"
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
