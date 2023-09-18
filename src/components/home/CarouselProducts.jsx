import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { fetchData } from "../../apis";
import { Link } from "react-router-dom";

const CarouselProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    (_) => {
      fetchData("products", setProducts);
    },
    [products]
  );

  return (
    <section className="bg-white mx-3 my-4 px-2 p-4">
      <h2 className="text-2xl font-semibold p-3 mb-2 ">Shop by Products</h2>
      <Swiper
        slidesPerView={2}
        loop={true}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        className="wraper-center"
        breakpoints={{
          450: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 9,
          },
        }}
      >
        {products?.map((product, i) => {
          if (i < 9 || i > 13) {
            return (
              <SwiperSlide
                key={product.id}
                className="py-4 !flex items-center max-w-[125px] h-[100%]"
              >
                <Link
                  to={`product-details/products/${product.id}`}
                  className="block !m-auto"
                >
                  <img
                    src={product.image_small}
                    alt={product.title}
                    className="h-[150px] w-[125px]"
                  />
                </Link>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </section>
  );
};

export default CarouselProducts;