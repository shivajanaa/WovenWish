import { motion } from "framer-motion";
import Card from "../components/Card";

const products = {
  toys: [
    { id: 1, title: "Crochet Bunny", image: "/images/toys/bunny.jpg", price: 499 },
    { id: 2, title: "Mini Bear", image: "/images/toys/bear.jpg", price: 549 },
    { id: 3, title: "Doll Set", image: "/images/toys/doll.jpg", price: 699 },
    { id: 4, title: "Elephant Plush", image: "/images/toys/elephant.jpg", price: 599 },
    { id: 5, title: "Cute Cat", image: "/images/toys/cat.jpg", price: 449 },
  ],
  fashion: [
    { id: 1, title: "Crochet Scarf", image: "/images/fashion/scarf.jpg", price: 799 },
    { id: 2, title: "Woolen Hat", image: "/images/fashion/hat.jpg", price: 399 },
    { id: 3, title: "Handmade Sweater", image: "/images/fashion/sweater.jpg", price: 1299 },
    { id: 4, title: "Boho Bag", image: "/images/fashion/bag.jpg", price: 899 },
    { id: 5, title: "Crochet Top", image: "/images/fashion/top.jpg", price: 999 },
  ],
  
  Keychains: [
    { id: 1, title: "Crochet Scarf", image: "/images/fashion/scarf.jpg", price: 799 },
    { id: 2, title: "Woolen Hat", image: "/images/fashion/hat.jpg", price: 399 },
    { id: 3, title: "Handmade Sweater", image: "/images/fashion/sweater.jpg", price: 1299 },
    { id: 4, title: "Boho Bag", image: "/images/fashion/bag.jpg", price: 899 },
    { id: 5, title: "Crochet Top", image: "/images/fashion/top.jpg", price: 999 },
  ],
  Bags: [
    { id: 1, title: "Crochet Scarf", image: "/images/fashion/scarf.jpg", price: 799 },
    { id: 2, title: "Woolen Hat", image: "/images/fashion/hat.jpg", price: 399 },
    { id: 3, title: "Handmade Sweater", image: "/images/fashion/sweater.jpg", price: 1299 },
    { id: 4, title: "Boho Bag", image: "/images/fashion/bag.jpg", price: 899 },
    { id: 5, title: "Crochet Top", image: "/images/fashion/top.jpg", price: 999 },
  ],
  accessories: [
    { id: 1, title: "Phone Pouch", image: "/images/accessories/pouch.jpg", price: 349 },
    { id: 2, title: "Keychain Set", image: "/images/accessories/keychain.jpg", price: 199 },
    { id: 3, title: "Hair Band", image: "/images/accessories/hairband.jpg", price: 249 },
    { id: 4, title: "Earrings", image: "/images/accessories/earrings.jpg", price: 299 },
    { id: 5, title: "Bracelet", image: "/images/accessories/bracelet.jpg", price: 399 },
  ],
  homeDecoration: [
    { id: 1, title: "Table Mat", image: "/images/home/mat.jpg", price: 499 },
    { id: 2, title: "Wall Hanging", image: "/images/home/hanging.jpg", price: 699 },
    { id: 3, title: "Cushion Cover", image: "/images/home/cushion.jpg", price: 599 },
    { id: 4, title: "Basket", image: "/images/home/basket.jpg", price: 799 },
    { id: 5, title: "Plant Holder", image: "/images/home/plant.jpg", price: 349 },
  ],
};

export default function ProductPage() {
  return (
    <div className="px-4 sm:px-6 py-8 bg-[#FFF9F2]">
     

      {Object.entries(products).map(([category, items], sectionIndex) => (
        <section key={category} className="mb-12">
          <motion.h2
            className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5 capitalize"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            viewport={{ once: true }}
          >
            {category === "homeDecoration" ? "Home Decoration" : category}
          </motion.h2>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
