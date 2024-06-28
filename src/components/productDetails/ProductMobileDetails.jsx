import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

import ProductRating from "./ProductRating";
import Productbadge from "./Productbadge";
import { compeletPriceSerial, selectDate } from "../../utilities";
import ProductBuy from "./ProductBuy";
import { useEffect , useState} from "react";

const ProductMobileDetails = ({product , setProduct , deliveryPrice}) => {
    const [discount,setDiscount] = useState(0)
    const [filtersDrop,setFiltrsDrop] = useState({
        'product-specification-brand':false,       
        'product-specification-avgRating':false,
        'product-specification-date':false,
        'product-specification-purchase':true,
      })
    
    useEffect(()=>{
        const priceBetween =  100 - ((product.price / product.oldPrice) * 100) ;
        const priceBetweenParsing = Math.ceil(priceBetween)
        setDiscount(priceBetweenParsing)
    })

    const handleFilterDrop = (e)=>{
          
        let drop;
        if (e.target.classList.contains('btn-drop')) {
          drop = e.target;
        }else if (e.target.parentElement.classList.contains('btn-drop')) {
          drop = e.target.parentElement
        }else if (e.target.parentElement.parentElement.classList.contains('btn-drop')) {
          drop = e.target.parentElement.parentElement
        }

        const value = drop.name;
        const newFiltersDrop = {
          ...filtersDrop,
           [value]:!filtersDrop[value]
        }

        setFiltrsDrop(newFiltersDrop)

      }
    
  return (
    <div className="product-mobile pt-4 pb-[30px] ">
        <header className="flex justify-between mb-3 px-4">
            <a href="#" className="text-[#007185]">
                Visit the {product.brand} Store
            </a>
            <div className="flex text-sm gap-1">
                <span>{product.avgRating}.0</span>
                <div>
                    <ProductRating avgRating={product.avgRating} ratings={product.ratings} ratingValue={null} />
                </div>
                <span className="text-[#007185]">
                    {product.ratings}
                </span>
            </div>
        </header>
        <div className="mb-4 px-4 text-xl  capitalize text-[#555]">
            {product.title} {product.description.slice(0,60)}
            <div className="mt-3 mb-[40px] flex gap-x-2 items-center">
                <div>
                    {< Productbadge badge={product.badge}/>}
                </div>
                <p className="text-base text-[#222] pt-3">
                    in {product.type} showen by {product.brand.toUpperCase()}
                </p>
            </div>
        </div>
        <div className="mb-4 relative border-solid  border-b border-[#ccc]">
            <button className="p-2 z-20 bg-white rounded-full absolute top-2 right-4 cursor-not-allowed" disabled>
                <i className="fa-solid fa-up-right-from-square text-3xl"></i>
            </button>
            <Swiper
            loop={true}
            spaceBetween={0}
            pagination={true}
            modules={[Pagination , Autoplay ]}
            autoplay={{ delay: 3000 }}
        >
            <SwiperSlide>
                <img
                src={`/${product.image}.webp`}
                alt={product.brand}
                className="max-h-[350px] block mx-auto y_0"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                src={`/${product.image}.webp`}
                alt={product.brand}
                className="max-h-[350px] block mx-auto y_45"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                src={`/${product.image}.webp`}
                alt={product.brand}
                className="max-h-[350px] block mx-auto y_60"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                src={`/${product.image}.webp`}
                alt={product.brand}
                className="max-h-[350px] block mx-auto y_90"
                />
            </SwiperSlide>
            </Swiper>
            <button disabled className="mx-auto mb-6 text-blue-600 cursor-not-allowed block fit-content text-xl rounded-lg border border-solid border-blue-600 py-3 px-5">
                VIEW 360<sup className=" text-[15px]">o</sup>
            </button>
        </div>
        <div className="specifications">
            <article className={`boolean-filters px-4 pt-2 pb-5 border-b-[1px] border-[#9e9e9e47]`}>
                <button className="mb-3 !w-[100%] btn-drop text-2xl" 
                    name="product-specification-brand"
                    onClick={handleFilterDrop}
                    >
                    <h2 className="flex justify-between">
                        <span>Brand:</span>
                        <i className={`inline-block fa-solid ${ filtersDrop['product-specification-brand'] ? 'fa-angle-up' : 'fa-angle-down'} sm:mr-8`}></i>      
                    </h2>
                </button>
                <div className={`mobile-filter text-3xl overflow-hidden ${filtersDrop['product-specification-brand'] ? 'with-height' : 'without-height'}`}>
                    <span>{product?.brand[0].toUpperCase()}{product?.brand.slice(1)}</span>
                </div>
            </article>
            <article className={`boolean-filters px-4 pt-2 pb-5 border-b-[1px] border-[#9e9e9e47]`}>
                <button className="mb-3 !w-[100%] btn-drop text-2xl" 
                    name="product-specification-avgRating"
                    onClick={handleFilterDrop}
                    >
                    <h2 className="flex justify-between">
                        <span>Ratings:</span>
                        <i className={`inline-block fa-solid ${ filtersDrop['product-specification-avgRating'] ? 'fa-angle-up' : 'fa-angle-down'} sm:mr-8`}></i>      
                    </h2>
                </button>
                <div className={`mobile-filter flex gap-4 text-2xl overflow-hidden ${filtersDrop['product-specification-avgRating'] ? 'with-height' : 'without-height'}`}>
                    <ProductRating avgRating={product.avgRating} ratings={product.ratings} ratingValue={null} fullWidth={false} />
                    <span className="text-black font-semibold">{product?.avgRating}</span>
                    <span className=" text-2xl">Avg.Customer Review :  <span className="text-2xl font-semibold text-black">{product.ratings}</span></span>
                </div>
            </article>
            <article className={`boolean-filters px-4 pt-2 pb-5 border-b-[1px] border-[#9e9e9e47]`}>
                <button className="mb-1 !w-[100%] btn-drop text-2xl" 
                    name="product-specification-date"
                    onClick={handleFilterDrop}
                    >
                    <h2 className="flex justify-between">
                        <span>Order date:</span>
                        <i className={`inline-block fa-solid ${ filtersDrop['product-specification-date'] ? 'fa-angle-up' : 'fa-angle-down'} sm:mr-8`}></i>      
                    </h2>
                </button>
                <div className={`mobile-filter gap-4 overflow-hidden ${filtersDrop['product-specification-date'] ? 'with-height' : 'without-height'}`}>
                    <span className="text-xl font-semibold">{selectDate(0)}</span>
                    <h2 className="text-2xl mt-4">Received rang date</h2>
                    <p className="text-xl">
                        Between <span className="font-semibold">{selectDate(1)}</span> && <span className="font-semibold">{selectDate(3)}</span>
                    </p>
                </div>
            </article>
            <article className={`boolean-filters px-4 pt-2 pb-5 border-b-[1px] border-[#9e9e9e47]`}>
                <h2 className=" font-bold text-2xl mb-4 text-black">Purchase options and add-ons</h2>
                <button className="mb-1 !w-[100%] btn-drop text-2xl" 
                    name="product-specification-purchase"
                    onClick={handleFilterDrop}
                    >
                    <h3 className="flex justify-between">
                        <span className="font-bold text-xl text-black">Trade-in and save</span>
                        <i className={`inline-block fa-solid ${ filtersDrop['product-specification-purchase'] ? 'fa-angle-up' : 'fa-angle-down'} sm:mr-8`}></i>      
                    </h3>
                </button>
                <div className={`mobile-filter gap-4 overflow-hidden text-xl ${filtersDrop['product-specification-purchase'] ? 'with-height' : 'without-height'}`}>
                    <p>
                        save up EGP {Math.ceil(product.price / 4)}.00 your new {product.type} with Amazone.com Gift Card credit when you trade in your old {product.type}
                    </p>
                    <div className="flex gap-3 mt-10 mb-2">
                        <button disabled className="h-[100px] w-[120px] cursor-not-allowed flex justify-center items-center border-[2px] border-solid border-black rounded-md">
                            No Thanks
                        </button>
                        <button disabled className="h-[100px] w-[190px] cursor-not-allowed flex flex-col justify-center items-center border-[2px] border-solid border-black rounded-md">
                            <span className="font-bold mb-3 text-black">Trade In</span>
                            <span>
                                Up to EGP {Math.ceil(product.price / 4)}.00 back
                            </span>
                        </button>
                    </div>
                </div>
            </article>
        </div>
        <div className="px-4">
            <article className="mt-5">
                <span className=" bg-red-700 text-white text-xl py-2 px-2">Deal</span>
            </article>
            <div className="mt-7">
                <article className="flex mb-3 gap-x-4 ">
                    {product.has_discount ?<span className=" text-5xl text-red-500 font-light">
                    -{discount}%
                    </span> : null}
                    <div className="flex !flex-nowrap">
                    <sub className="text-xl">EGP</sub>
                    <span className=" text-[#0F1111] text-5xl font-light">
                        {compeletPriceSerial(product.price)}
                    </span>
                    <sub className="text-xl">00</sub>
                    </div>
                    <br/>
                    {product.has_discount && 
                    <div className="ml-2 mt-2 text-[#555] text-xl">
                            List Price: <span className="line-through">
                            EGP {compeletPriceSerial(product.oldPrice)}
                            <i className="fa-solid fa-circle-exclamation ml-2 text-[#888]"></i>
                            </span>
                        </div> 
                    }
                </article>
                <article className="cursor-pointer mb-1">
                    <p className="text-2xl text-[#222] mb-4 font-thin">
                        EGP {product.price} Shipping & Import Fees <br/>
                        Deposit to Egypy <a to='#' className="text-[#007185] cursor-not-allowed"> Details</a>
                    </p>
                    <p className="text-2xl ">
                        <span className="">Delivery is {product.free_delivery ? 'FREE' : 'sheap'} </span>
                        <span className="ml-1"> once you determin to receive in</span>
                        <span className="font-semibold text-[#222] ml-3">{selectDate(3)} </span>
                    </p>
                    <p className="mt-3 leading-10 text-2xl">
                    Or fastest delivery <span className="font-semibold text-[#222]">Tomorrow, {selectDate(1)} .</span>
                    Order within <span className="text-[#007600]">16 hours 18 mins</span>
                    </p>
                </article>
                <article className="to flex items-center gap-2 mt-3">
                    <i className="fa-solid text-xl fa-location-dot"></i>
                    <span className="ml-1 text-xl text-[#007185] pt-[1px]">Deliver to Egypt</span>
                </article>
                <article className="text-4xl text-[#007600] mt-6 mb-2">
                    In Stock
                </article> 
          </div>
        </div>
        <div className="px-6 text-2xl ">
         <ProductBuy product={product} setProduct={setProduct} deliveryPrice={deliveryPrice} />
        </div>
    </div>
  )
}

export default ProductMobileDetails