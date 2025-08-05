import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import ProductCard from "../Card";
import "./ProductCarousel.css"

export default function ProductCarousel() {
  const products = [
    { image: "https://m.media-amazon.com/images/I/612Y1JQz-dL._UY1000_.jpg", title: "Crochet Bag", price: 1199 },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQlloUZw3Kxru20i_0ZGMYylnEWKgVQ8n2A&s", title: "Keychain", price: 159 },
    { image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYAGhjAZ7RW0si-oQq5W47SLG1Z4odBFty1BR9thq_h3Trg7rNX8zq0AXpqA5hgZYhhRuXvbXXkyKbK4jI_qHLZU0NQNPsFdgrAF_M1Ngy4SVzwcR88sebPQ", title: "Scrunchie", price: 159 },
    { image: "https://m.media-amazon.com/images/I/61xv1FDofXL._AC_UL480_FMwebp_QL65_.jpg", title: "Teddy", price: 899 },
    { image: "https://images.meesho.com/images/products/486465555/wetvv_512.avif?width=512", title: "Tulip Flower", price: 599 },
  ];

  return (
    <div className="max-w-7xl  mx-auto py-10">
    

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
          
        }}
      >
        {products.map((p, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
