import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#FFE9E2] to-[#FFFAEC] border-t-2 border-dashed border-[#f3c5b3] py-8 text-center">
      <h2 className="text-2xl font-bold text-[#c47c68]">WovenWish 🧶</h2>
      <p className="text-[#a76858] italic mb-4">Handmade with love & care</p>

      {/* Navigation Links */}
      <nav className="mb-4">
        <Link
          to="/"
          className="text-[#8a5d50] mx-3 font-medium hover:text-[#c47c68] transition"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-[#8a5d50] mx-3 font-medium hover:text-[#c47c68] transition"
        >
          Shop
        </Link>
        {/* <Link
          to="/custom-orders"
          className="text-[#8a5d50] mx-3 font-medium hover:text-[#c47c68] transition"
        >
          Custom Orders
        </Link> */}
        <Link
          to="/contact"
          className="text-[#8a5d50] mx-3 font-medium hover:text-[#c47c68] transition"
        >
          Contact
        </Link>
      </nav>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://www.instagram.com/the_wovenwish/?utm_source=ig_web_button_share_sheet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/instagram.svg"
            alt="Instagram"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>

        <a href="#">
          <img
            src="./images/facebook.svg"
            alt="Facebook"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>

        <a href="https://in.pinterest.com/wovenwish/?actingBusinessId=906419999911222052 "
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="./images/pintrest.svg"
            alt="Pinterest"
            className="w-10 h-10 hover:scale-110 transition-transform"
          />
        </a>
      </div>

      <p className="text-sm text-[#7c5247]">
        © 2025 WovenWish. All Rights Reserved.
      </p>
    </footer>
  );
}
