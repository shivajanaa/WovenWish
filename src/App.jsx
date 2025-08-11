import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/products"
          element={
            <motion.div {...pageTransition}>
              <ProductPage />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="bg-[#FFE9E2] p-5">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
      <Footer />
    </div>
  );
}
