import { useState,useEffect } from "react";
import Productbadge from "./Productbadge";
import ProductRating from "./ProductRating";
import { compeletPriceSerial } from "../../utilities";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


const ProductDetailsInfo = ({ product }) => {

  const [discount,setDiscount] = useState(0)
    
    useEffect(()=>{
        const priceBetween =  100 - ((product.price / product.oldPrice) * 100) ;
        const priceBetweenParsing = Math.ceil(priceBetween)
        setDiscount(priceBetweenParsing)
    })
 
  return (
    <div className=" bg-white">
      <div className="mb-6  bg-white border-b border-solid  border-gray-400  font-extralight">
        <h2 className="text-2xl  mb-1 font-normal capitalize">
        <span className=" text-[#0F1111] m-0">
          {product.type} {product.title} {product.description.slice(0,50)}
           <span> </span>From Our Online Market and get the same specifications
        </span>
        </h2>

        <div className="text-lg lg:text-xl my-2">
          <span className=" text-[#007185] upperCase font-medium capitalize ">Brand: {product.brand}</span>
        </div>
        <div className="text-md lg:text-lg  mb-1 flex items-center">
          <span className="mr-1">{product.avgRating}</span>
          <ProductRating avgRating={product.avgRating} ratings={product.ratings} />
          <span className="text-[#007185] cursor-pointer  ml-2">Ratings</span>
        </div>
        <p className="block ml-2 text-[#333]">| <span className="text-[#007185] ml-4"> 71 answered quetions</span></p>
        <p className="pl-2 pb-2 mt-2 text-[#333] text-sm">50+ bought in Past Month</p>  
      </div>
      <div>
        <Productbadge badge={product.badge} />
        {
          product.has_discount && product.price < product.oldPrice ? 

          <div className="mt-5">
            <div className="flex mb-3 gap-x-4">
                <span className=" text-[25px] text-red-500 font-light">
                  -{discount}%
                </span>
                <div className="flex !flex-nowrap">
                  <sub className="text-[15px]">EGP</sub>
                  <span className=" text-[#0F1111] text-[25px] font-light">
                    {compeletPriceSerial(product.price)}
                  </span>
                  <sub className="text-[15px]">00</sub>
                </div>
                {product.has_discount && 
                  <span className="ml-2 text-[#555] ">List Price: <span className="line-through">EGP {compeletPriceSerial(product.oldPrice)}</span></span> 
                }
            </div>
          </div>  :  
          <div className=" text-[#0F1111] text-[25px] mt-4 font-light">
            <div className="flex !flex-nowrap ml-2">
              <sub className="text-[15px]">EGP</sub>
              <span className=" text-[#0F1111] text-[25px] font-light">
                {compeletPriceSerial(product.price)}
              </span>
              <sub className="text-[15px]">00</sub>
            </div>
        </div>
       }
      </div>
      <div className="text-[#007185] cursor-pointer mb-1">
        FREE Return <i className="fa-solid fa-angle-down text-sm ml-2 text-gray-600"></i>
      </div>
      <div>
        All prices include VAT.
      </div>
      <div className="mt-4">
        <span className="text-sm text-[#777]"> Sign in to redeem. </span> <span className="bg-[#7fda69] py-1 px-2 mb-1 inline-block font-medium"><span className=" font-semibold">Prime Savings </span>20%</span> off with Mastercard up to EGP300 Enter code MC300 at checkout. Discount by Amazon.
        <span className="text-[#007185] ml-2 cursor-pointer">
          Term <i className="fa-solid fa-angle-down text-sm ml-1 text-gray-600"></i>
        </span>
      </div>
      <div className="product-services p-2 !mt-5">
        <Swiper
          slidesPerView={2}
          loop={true}
          navigation={true}
          spaceBetween={1}
          modules={[Navigation]}
          breakpoints={{
            450: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className=" !flex justify-center">
            <button className="max-w-[85px] leading-[.8]">
              <img loading="lazy"
                src="/images/product-details-1.webp"
                alt="all brands"
                className="block m-auto w-[35px] h-[35px]"
              />
              <span className="text-[#007185] text-sm">
                Cash on Delivery
              </span>
            </button>
          </SwiperSlide>

          <SwiperSlide className=" !flex justify-center">
            <button className="max-w-[85px] leading-[.8]">
              <img loading="lazy"
                src="/images/product-details-2.webp"
                alt="all brands"
                className="block m-auto w-[35px] h-[35px]"
              />
              <span className="text-[#007185] text-sm">
                15 days Returnable 
              </span>
            </button>
          </SwiperSlide>

          <SwiperSlide className=" !flex justify-center">
            <button className="max-w-[85px] leading-[.8]">
                <img loading="lazy"
                  src="/images/product-details-3.webp"
                  alt="all brands"
                  className="block m-auto w-[35px] h-[35px]"
                />
                <span className="text-[#007185] text-sm">
                1 Year Manufacturer Warranty 
                </span>
              </button>
          </SwiperSlide>

          <SwiperSlide className=" !flex justify-center">
            <button className="max-w-[85px] leading-[.8]">
              <img loading="lazy"
                src="/images/product-details-4.webp"
                alt="all brands"
                className="block m-auto w-[35px] h-[35px]"
              />
              <span className="text-[#007185] text-sm">
              Delivered by <br/> Amazone
              </span>
            </button>
          </SwiperSlide>
        </Swiper>
      </div> 
    </div>
  );
};

export default ProductDetailsInfo;


/*



<div className="mb-4">
        <Productbadge badge={product.badge} />
      </div>



*/