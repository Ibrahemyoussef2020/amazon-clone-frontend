import { useEffect, useState } from "react"
import { compeletPriceSerial , selectDate } from "../../utilities"
import ProductBuy from "./ProductBuy"


const ProductDelivery = ({product , setProduct , deliveryPrice}) => {
    const [discount,setDiscount] = useState(0)
    
    useEffect(()=>{
        const priceBetween =  100 - ((product.price / product.oldPrice) * 100) ;
        const priceBetweenParsing = Math.ceil(priceBetween)
        setDiscount(priceBetweenParsing)
    })
    
  return (
    <>
    <div className='border border-solid  border-gray-400 rounded-md'>
        <div className='p-1'>
            <div className='flex gap-x-3 p-2 bg-[#ccc]  rounded-md font-semibold'>
                <input type='checkbox' />
                <span>Yes, I want FREE Delivery</span>
            </div>
            <div>
                <a className='text-[#007185] hover:text-[#C7511F] text-center hover:underline block cursor-pointer'>
                    Amazone prime
                </a>
                <div className='py-2 mt-3'>
                    <img loading="lazy" src='/images/amazon-prime.webp' className='max-w-[110px] mx-auto'/>
                </div>
            </div>
        </div>    

    </div>

    <div className=' mt-6 py-4 px-3 border border-solid  border-gray-400 rounded-md'>
        <div className="flex !flex-nowrap">
            <sub className="text-[15px]">EGP</sub>
            <span className=" text-[#0F1111] text-[25px] font-light">
            {compeletPriceSerial(product.price)}
            </span>
            <sub className="text-[15px]">00</sub>
        </div>
        <div className="text-[#007185] cursor-pointer mt-3 mb-1">
            FREE Return <i className="fa-solid fa-angle-down text-sm ml-2 text-gray-600"></i>
        </div>
            <div className="cursor-pointer mb-1">
                <p className="flex gap-1">
                    <span className="text-[#007185] whitespace-nowrap"> {product.free_delivery ? 'FREE' : 'SHEAP'} Delivery </span>
                    <span className="font-semibold">{selectDate(3)} </span>
                </p>
                <p className="mt-3 leading-7">
                Or fastest delivery <span className="font-semibold">Tomorrow, {selectDate(1)} .</span>
                Order within <span className="text-[#007600]">16 hours 18 mins</span>
                </p>
            </div> 
            <div className="to flex items-center gap-2 mt-3">
                <i className="fa-solid fa-location-dot"></i>
                <span className="ml-1 text-[#007185] pt-[1px]">Deliver to Egypt</span>
            </div>
            <div className=" text-[18px] text-[#007600] mt-3">
                In Stock
            </div>
            <div className="mt-4">
                <ProductBuy product={product} setProduct={setProduct} deliveryPrice={deliveryPrice} />
            </div>
        </div>
    </>
  )
}

export default ProductDelivery



/*
<div className="cursor-pointer mb-1">
    <p className="flex gap-2">
        <span className="text-[#007185]">&& {deliveryPrice} For Delivery</span>
        <span className=" text-[#000]">
            {selectDate(1)}
        </span>
    </p>
    <div className="flex !flex-nowrap mt-5">
    <sub    className="text-[15px]">EGP</sub>
    <span className="text-[25px] font-light">
    {compeletPriceSerial(product.price + deliveryPrice)}
    </span>
    <sub className="text-[15px]">00</sub>
    </div>
</div>

*/