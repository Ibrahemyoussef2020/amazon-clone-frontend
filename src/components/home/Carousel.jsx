import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[200px] md:h-[700px] bg-gradient-to-b from-stone-900">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="h-[100%]"
      >
        <SwiperSlide className="sm:none">
          <div className="hidden xs:block">
            <video
              loop
              muted
              autoPlay
              controls=""
              className="h-[100%] min-h-[600px] bg-black"
            >
              <source src="videos/carousel_vid.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="block xs:hidden h-[100%]">
            <img
              src="images/slider-1.jpg"
              alt="the rings of power"
              className="h-[100%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(min-width:7671px)" srcSet="images/carousel_1.jpg" />
            <img
              src="images/slider-2.jpg"
              alt="the rings of power"
              className="min-h-[100%]"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(min-width:7671px)" srcSet="images/carousel_2.jpg" />
            <img
              src="images/slider-3.jpg"
              alt="the rings of power"
              className="min-h-[100%]"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(min-width:7671px)" srcSet="images/carousel_3.jpg" />
            <img
              src="images/slider-4.jpg"
              alt="the rings of power"
              className="min-h-[100%]"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(min-width:7671px)" srcSet="images/carousel_4.jpg" />
            <img
              src="images/slider-5.jpg"
              alt="the rings of power"
              className="min-h-[100%]"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
};

export default Carousel;
