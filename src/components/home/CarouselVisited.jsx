import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { fetchData } from "../../apis";
import VisitedItem from "./VisitedItem";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CarouselVisited = () => {
  const [products, setProducts] = useState([]);
  const [section,setSection] = useState('consider');

  useEffect(
    (_) => {
      fetchData(section, setProducts);
    },
    []
  );

  if(!products?.length){
    return( 
      <div className={`row text-center bg-inhrit`} style={{overflowX:'hidden'}}>
       <div className='Skeleton-container sm:col-span-6 md:col-span-4  my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
        <div className='Skeleton-container sm:col-span-6 md:col-span-4 my-1 text-center bg-inhrit'>
            <Skeleton height={200} width={'100%'}/>
        </div>
      </div>
    )
    }

  return (
    <section className="bg-white mx-3 my-4 px-2 p-4">
      <h2 className="text-2xl font-semibold px-3 pt-3 mb-0">
        We Have Anothers for you{" "}
      </h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        spaceBetween={10}
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
        {products?.map((product, i) => {
          if (i <= 14) {
            return (
              <SwiperSlide
                key={product.id}
                className="py-4 !flex items-center h-[100%]"
              >
                  <VisitedItem product={product} section={section} rat={2} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </section>
  );
};

export default CarouselVisited;
