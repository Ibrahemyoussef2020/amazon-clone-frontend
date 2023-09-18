import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { fetchData } from "../../apis";
import { Link } from "react-router-dom";

const CarouselConsider = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    (_) => {
      fetchData("consider", setProducts);
    },
    [products]
  );

  return (
    <section className="bg-white mx-3 my-4 px-2 p-4">
      <h2 className="text-2xl font-semibold px-3 pt-3 mb-0">
        More items to consider{" "}
        <Link
          to="#"
          className="inline-block ml-2 text-sm text-[#67bdcc] font-[600] relative -top-[4px]"
        >
          See more
        </Link>
      </h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        className="wraper-center h-[250px]"
        breakpoints={{
          570: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
      >
        {products?.map((product, i) => {
          if (i <= 14) {
            return (
              <SwiperSlide
                key={product.id}
                className="py-4 !flex items-center h-[100%]"
              >
                <Link
                  to={`/product-details/consider/${product.id}`}
                  className="block !m-auto"
                >
                  <img
                    src={`${product.image}.jpg`}
                    alt={product.title}
                    className=" min-w-[250px] md:min-w-[300px] max-h-[150px]"
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

export default CarouselConsider;
