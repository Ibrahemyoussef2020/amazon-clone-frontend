import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { fetchData } from "../../apis";
import { Link } from "react-router-dom";

const CarouselPets = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    (_) => {
      fetchData("pets", setProducts);
    },
    [products]
  );

  return (
    <section className="bg-white mx-3 my-4 px-2 p-4">
      <h2 className="text-2xl font-semibold px-3 pt-3 mb-0">
        Pets mels corner <Link to="#">Shop now</Link>
      </h2>
      <Swiper
        slidesPerView={2}
        loop={true}
        navigation={true}
        spaceBetween={0}
        modules={[Navigation]}
        className="wraper-center"
        breakpoints={{
          570: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
          1400: {
            slidesPerView: 10,
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
                <Link to={`product-details/pets/${product.id}`}>
                  <img
                    src={`${product.image}.jpg`}
                    alt={product.title}
                    className="h-[200px]"
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

export default CarouselPets;
