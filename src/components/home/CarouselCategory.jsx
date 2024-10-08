import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";


const CarouselCategory = ()=> {

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
          <Link to='/'>
            <img loading="lazy"
              src="/images/category_0.webp"
              alt="all brands"
              className="block "
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/search-results/sports'>
            <img loading="lazy" src="/images/category_1.webp" alt="Devices" className="block " />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/search-results/fashion'>
            <img loading="lazy" src="/images/category_2.webp" alt="Fashion" className="block " />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/search-results/computers">
            <img loading="lazy"
              src="/images/category_3.webp"
              alt="Computer software"
              className="block "
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/search-results/appliaces'>
            <img loading="lazy"
              src="/images/category_4.webp"
              alt="kitchen"
              className="block "
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/search-results/mobiles">
            <img loading="lazy"
              src="/images/category_5.webp"
              alt="mobiles"
              className="block "
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CarouselCategory;
