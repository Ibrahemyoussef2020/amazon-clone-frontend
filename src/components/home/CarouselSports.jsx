import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { fetchData } from "../../apis";
import { Link } from "react-router-dom";

const CarouselSports = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    (_) => {
      fetchData("sports", setProducts);
    },
    [products]
  );

  return (
    <section className="bg-white mx-3 my-4 px-2 p-4">
      <h2 className="text-2xl font-semibold p-3 mb-2 ">
        Shop top picks in Sports{" "}
        <Link
          to="#"
          className="inline-block ml-2 text-sm text-[#67bdcc] font-[600] relative -top-[4px]"
        >
          Explore more
        </Link>
      </h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        spaceBetween={0}
        modules={[Navigation]}
        className="wraper-center h-[250px]"
        breakpoints={{
          570: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 7,
          },
          1400: {
            slidesPerView: 8,
          },
          1600: {
            slidesPerView: 9,
          },
        }}
      >
        {products?.map((product, i) => {
          if (i <= 17) {
            return (
              <SwiperSlide
                key={product.id}
                className="py-4 !flex items-center min-w-[300px]  h-[100%]"
              >
                <Link
                  to={`product-details/sports/${product.id}`}
                  className="block !m-auto"
                >
                  <img
                    src={`${product.image}.jpg`}
                    alt={product.title}
                    className="max-w-[270px] max-h-[200px] "
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

export default CarouselSports;
