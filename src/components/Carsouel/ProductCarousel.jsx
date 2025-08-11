import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function ProductCarousel() {
  const products = [
    { image: "https://m.media-amazon.com/images/I/612Y1JQz-dL._UY1000_.jpg", title: "Crochet Bag", price: 1199 },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQlloUZw3Kxru20i_0ZGMYylnEWKgVQ8n2A&s", title: "Keychain", price: 159 },
    { image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYAGhjAZ7RW0si-oQq5W47SLG1Z4odBFty1BR9thq_h3Trg7rNX8zq0AXpqA5hgZYhhRuXvbXXkyKbK4jI_qHLZU0NQNPsFdgrAF_M1Ngy4SVzwcR88sebPQ", title: "Scrunchie", price: 159 },
    { image: "https://m.media-amazon.com/images/I/61xv1FDofXL._AC_UL480_FMwebp_QL65_.jpg", title: "Teddy", price: 899 },
    { image: "https://images.meesho.com/images/products/486465555/wetvv_512.avif?width=512", title: "Tulip Flower", price: 599 },
    { image: "https://images.meesho.com/images/products/456721780/q2imx_512.jpg", title: "Rose Flower", price: 599 },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10">
    <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true} // infinite loop enabled
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((p, index) => (
          <SwiperSlide key={index}>
            <div
              className="rounded-xl overflow-hidden p-4 shadow-xl hover:scale-105 transition duration-300"
              style={{ backgroundColor: "#FFFAEC" }} // ✅ Matches your theme
            >
              <div className="w-full h-60 flex items-center justify-center bg-[#FFFAEC] rounded-lg">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                <p className="text-pink-700 font-bold">₹{p.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
