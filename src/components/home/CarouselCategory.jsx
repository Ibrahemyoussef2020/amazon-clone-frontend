import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  const filterCategory = (category) => {
    console.log(category);
  };

  return (
    <section className="bg-white mx-3 my-4 px-2 py-4">
      <h2 className="text-2xl font-semibold p-3 mb-3">Shop by Category</h2>
      <Swiper
        slidesPerView={2}
        loop={true}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        breakpoints={{
          450: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 5,
          },
          1124: {
            slidesPerView: 6,
          },
        }}
      >
        <SwiperSlide>
          <Link onClick={(_) => filterCategory("all")}>
            <img
              src="images/category_0.jpg"
              alt="all brands"
              className="block "
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link onClick={(_) => filterCategory("devises")}>
            <img src="images/category_1.jpg" alt="Devices" className="block " />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link onClick={(_) => filterCategory("fashion")}>
            <img src="images/category_2.jpg" alt="Fashion" className="block " />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link onClick={(_) => filterCategory("computers")}>
            <img
              src="images/category_3.jpg"
              alt="Computer software"
              className="block "
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link onClick={(_) => filterCategory("kitchen")}>
            <img
              src="images/category_4.jpg"
              alt="all brands"
              className="block "
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link onClick={(_) => filterCategory("mobile")}>
            <img
              src="images/category_5.jpg"
              alt="all brands"
              className="block "
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CarouselCategory;
