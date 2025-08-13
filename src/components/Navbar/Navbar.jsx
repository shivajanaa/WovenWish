import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SearchBox from "../SearchBox";
import { Link } from "react-router-dom";

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
 
  { name: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "desktop" | "mobile" | null
  const navigate = useNavigate();

  const handleSubmenuClick = (hash) => {
    navigate(`/products${hash}`);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-[#FFFAEC] shadow-lg rounded-2xl"
    >
      <div className="flex items-center justify-between h-[15vh] max-w-8xl mx-auto px-4 md:px-8 text-[#8A5560]">
        {/* Logo */}
      <Link to="/">  
      <div className="flex items-center space-x-3">
        
         <img className="w-20" src="/images/logo.png" alt="Wovenwish" /> 
          <h1 className="font-bold text-lg">Woven Wish</h1>
          
        </div>
        </Link>  

        {/* Search */}
        <div className="hidden md:block">
          <SearchBox />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center relative">
          {navLinks.map(({ name, path, submenu }) => (
            <li
              key={name}
              className="relative"
              onMouseEnter={() => submenu && setOpenDropdown("desktop")}
              onMouseLeave={() => submenu && setOpenDropdown(null)}
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `cursor-pointer select-none font-medium ${
                    isActive
                      ? "border-b-2 font-bold border-[#8A5560]"
                      : "hover:border-b-2 hover:border-[#8A5560]"
                  }`
                }
              >
                {name}
              </NavLink>

              {/* Desktop Dropdown */}
              {submenu && (
                <AnimatePresence>
                  {openDropdown === "desktop" && (
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
              )}
            </li>
          ))}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#FFFAEC] text-[#8A5560] shadow-md rounded-b-2xl overflow-hidden px-4 py-3 space-y-1"
          >
            {navLinks.map(({ name, path, submenu }) => (
              <li key={name} className="border-b border-[#EACDC2] last:border-none">
                {submenu ? (
                  <>
                    <button
                      className="w-full flex justify-between items-center py-2 font-medium"
                      onClick={() =>
                        setOpenDropdown(openDropdown === "mobile" ? null : "mobile")
                      }
                    >
                      {name}
                      <motion.span
                        animate={{
                          rotate: openDropdown === "mobile" ? 90 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        ▶
                      </motion.span>
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {openDropdown === "mobile" && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="pl-4 space-y-1 overflow-hidden"
                        >
                          <li>
                            <NavLink
                              to={path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block w-full text-left py-2 border-b border-[#EACDC2] hover:border-b-2 hover:border-[#8A5560] text-sm"
                            >
                              All Products
                            </NavLink>
                          </li>
                          {submenu.map(({ name: subName, hash }) => (
                            <li key={subName}>
                              <button
                                onClick={() => handleSubmenuClick(hash)}
                                className="block w-full text-left py-2 border-b border-[#EACDC2] last:border-none hover:border-b-2 hover:border-[#8A5560] text-sm"
                              >
                                {subName}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 font-medium ${
                        isActive
                          ? "font-bold border-b-2 border-[#8A5560]"
                          : "hover:border-b-2 hover:border-[#8A5560]"
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
