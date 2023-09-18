import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { fetchData } from "../../apis";
import { Link } from "react-router-dom";

const CarouselSavingCorner = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    (_) => {
      fetchData("saving_corner", setProducts);
    },
    [products]
  );

  return (
    <section className="bg-white mx-3 my-4 px-2 p-4">
      <h2 className="text-2xl font-semibold px-3 pt-3 mb-0">Saving Corner</h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        spaceBetween={0}
        modules={[Navigation]}
        className="wraper-center"
        breakpoints={{
          420: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
          1400: {
            slidesPerView: 8,
          },
        }}
      >
        {products?.map((product, i) => (
          <SwiperSlide
            key={product.id}
            className="py-4 !flex items-center h-[100%]"
          >
            <Link
              to={`product-details/saving_corner/${product.id}`}
              className="block !m-auto"
            >
              <img
                src={`${product.image}.jpg`}
                alt={product.title}
                className="block !m-auto"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarouselSavingCorner;
