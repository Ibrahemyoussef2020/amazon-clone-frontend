import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[200px] main-moved-slider md:h-[700px] bg-gradient-to-b from-stone-900">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="h-[100%]"
      >
        <SwiperSlide className="sm:none">
            <img
              src="/images/slider-0.webp"
              alt="the rings of power"
              className="h-[100%] min-w-[100%]"
            />
        </SwiperSlide>
        <SwiperSlide className="sm:none">
            <img
              src="/images/slider-1.webp"
              alt="the rings of power"
              className="h-[100%] min-w-[100%]"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="/images/slider-2.webp"
              alt="the rings of power"
              className="min-h-[100%] min-w-[100%]"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="/images/slider-3.webp"
              alt="the rings of power"
              className="min-h-[100%] min-w-[100%]"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="/images/slider-4.webp"
              alt="the rings of power"
              className="min-h-[100%] min-w-[100%]"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="/images/slider-5.webp"
              alt="the rings of power"
              className="min-h-[100%] min-w-[100%]"
            />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
};

export default Carousel;
