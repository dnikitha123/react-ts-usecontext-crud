import React, { useState } from "react";
import ProductContext from "./ProductContext";
import { Product } from "./ProductContext";

interface Props {
  children: React.ReactNode;
}

const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Pola Sofa",
      price: 40900,
      img: "https://cdn.shopify.com/s/files/1/0008/2093/6769/products/3_Seater_Wood_Leg_1000x.jpg?v=1668606026",
      desc: "Luxuriate in a superior seating experience with our premium sofa, accommodating 3-4 people with ease. Built to last, this ergonomic piece is perfect for everyday use and large family gatherings.",
      link: "https://pelicanessentials.com/products/palo-3seater-removable?variant=42992518693106&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_campaign=gs-2022-08-10&utm_source=google&utm_medium=smart_campaign&gad=1&gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oLIj1PJeKaeu84acrrPn3u7D7ZQcVe297TGLkSAc22pv9pOnJ2HXu4aAhyUEALw_wcB",
    },
    {
      id: 2,
      name: "Taurus Engineered Wood Bed with Storage",
      price: 11484,
      img: "https://wakefitdev.gumlet.io/img/engineered-wood-bed/taurus/new/0.jpg?w=1600",
      desc: "Selecting a hydraulic engineered wood bed with storage need not be so daunting when you have Wakefit by your side. We believe that shopping should be fun, it should be therapeutic. Buying beds from Wakefit gives you a taste of retail therapy at its finest.",
      link: "https://www.wakefit.co/bed/engineered-wood-bed-with-storage-taurus/WEWB7860STAURUSR2?cid=Cj0KCQjw7aqkBhDPARIsAKGa0oKgLIDyq9kwSyQodGG0hc7V7z61Aw1xSb0qXdqLi5oY9QbHPCmi9u8aAl3KEALw_wcB&gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oKgLIDyq9kwSyQodGG0hc7V7z61Aw1xSb0qXdqLi5oY9QbHPCmi9u8aAl3KEALw_wcB&kw=&pl=&s_p=&utm_adgroup=&utm_campaign=19588265192&utm_medium=cpc&utm_source=Google",
    },
    {
      id: 3,
      name: "Panas Fabric Wing Chair in Bold Yellow Colour",
      price: 18000,
      img: "https://ii2.pepperfry.com/media/catalog/product/p/a/1100x1210/panas-wing-chair-in-yellow-by-febonic-panas-wing-chair-in-yellow-by-febonic-m3nkex.jpg",
      desc: "Furniture having intricate hand-painted details are individual unique pieces and may have slight distinctions and variance between the picture and actual product.",
      link: "https://www.pepperfry.com/product/panas-fabric-wing-chair-in-bold-yellow-colour-1889388.html?utm_campaign=Google-CPC&utm_content=Panas-Fabric-Wing-Chair-in-Bold-Yellow-Colour&gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oLFGHajhomYznAqilYpd1-siPeNAQHYxi0G88zzdna9-GbXfOxyPloaAoK2EALw_wcB",
    },
    {
      id: 4,
      name: "Black & Gold Metal Water Tap Planter",
      price: 1100,
      img: "https://ii3.pepperfry.com/media/catalog/product/b/l/1100x1210/black---gold-metal-water-tap-planter-by--home-black---gold-metal-water-tap-planter-by--home-dk1ycg.jpg",
      desc: "Thinking for renovation of room decoration then go for this stylish yet beautiful planter pot. @home brings a lot of varieties in planter pots according to needs and requirement of room decor. This unique and classic style of Planter pot makes it different from other planter pots and it creates a positive ambience in room. A perfect pick for home decor or office decor.",
      link: "https://www.pepperfry.com/product/black-and-gold-metal-water-tap-planter-1931587.html",
    },
    // {
    //   id: 5,
    //   name: "Center Table with Storage (Luna)",
    //   price: "8700",
    //   img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSd9JXwYTtDJHhiEdXC0ZdMqZSvRlY_SUvkh9kvfzMey8JZLLKoHFHcGS8abloz6hr1AMymrGvpEpkK6YMuCfAG8GUrv1_cnqKl_Vtkh7s",
    //   desc: "This beautiful glass top centre table is a statement piece for any living room. The glass top adds an elegant touch to the centre table and lets it blend easily with your other home furniture. It is supported by a wooden frame, making it a durable and attractive option for spacious living areas. The centre table not just looks good, but provides a convenient place for photo frames, souvenirs or show pieces. And for other knick-knacks like the TV remote, magazines or newspapers, or just coasters, there is a second glass shelf below the table top. The smoothened glass top is 8 mm thick, which gives it a longer life span, and the lower shelf has a thickness of 5 mm.",
    //   link: "https://www.nilkamalfurniture.com/products/nilkamal-luna-centre-table?variant=22088046215257&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AR57-fAiqJwTv-NfYozL4IEmuV0T0DoNU48O_p3eYodcjsOdcp-W6QOClLQ",
    // },
    // {
    //   id: 6,
    //   name: ''
    // }
  ]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const updateProduct = (id: number, updatedProduct: Product) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id ? updatedProduct : product
      );
      return updatedProducts;
    });
  };

  const deleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
