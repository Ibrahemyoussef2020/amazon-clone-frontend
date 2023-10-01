import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { fetchData } from "../../apis";
import { Link } from "react-router-dom";

const CarouselTodaysOffers = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    (_) => {
      fetchData("todays_offers", setProducts);
    },
    [products]
  );

  return (
    <section className="bg-white mx-3 my-4 px-2 p-4" id="todays-offer">
      <h2 className="text-2xl font-semibold p-3 mb-3">
        Browese Today's Offers{" "}
        <a
          href="#"
          className="inline-block ml-2 text-sm text-[#67bdcc] font-[600] relative -top-[4px]"
        >
          Discover all Offers
        </a>
      </h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        spaceBetween={20}
        modules={[Navigation]}
        className="wraper-center"
        breakpoints={{
          570: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
      >
        {products?.map((product, i) => (
          <SwiperSlide
            key={product.id}
            className="!h-[350px] min-w-[180px] !flex items-center flex-col	 bg-[#f7f8f8]  py-4"
          >
            <Link
              to={`product-details/todays_offers/${product.id}`}
              className="block !m-auto"
            >
              <img
                src={`${product.image}.jpg`}
                alt={product.title}
                className="!m-auto max-w-[90%] max-h-[80%]"
              />
              <div className="flex w-[100%] px-2 mb-3">
                <span className="bg-[#CC0C39] text-white font-bold text-sm py-1 px-2 mr-2 rounded  min-w-[150px]">
                  {product.discount}
                </span>
                <span
                  href="#"
                  target="_blank"
                  className="block text-[#CC0C39] text-sm font-bold mt-2"
                >
                  {product.link}
                </span>
              </div>
              <p className="w-[100%] px-4 text-xs text-[#333] font-bold">
                Take advantage of The Offer
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarouselTodaysOffers;
