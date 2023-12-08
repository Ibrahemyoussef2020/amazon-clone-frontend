import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchSlectedData } from "../apis";
import { ProductBuy, ProductDetailsInfo , ProductDelivery, ProductDetailsPoster, CategoriesNav, ProductMobileDetails } from "../components";
import { Link } from "react-router-dom";

const ProducDetails = () => {
  const params = useParams();
  const { part, productId } = params;
  const [product, setProduct] = useState({});
  const [rotate_y,setRotate_y] = useState('')
 
  const [deliveryPrice,setDeliveryPrice ] = useState(1)


  useEffect(() => {
      fetchSlectedData(part , setProduct, productId);
    
      const delivery = product.price < 50 ?  Math.ceil(product.price / 4) : product.price > 50 &&  product.price < 100 ? 20 :  50;
      setDeliveryPrice(delivery)
      
  }, [productId,rotate_y ,deliveryPrice]);

  

  if (!product?.id) return <h2>Loading....</h2>;


  return (
    <>
    <CategoriesNav selectedValue={part} fromMethod='category'/>
    <ProductDetailsPoster part={part}/>

    <div className="sm:hidden">
      <ProductMobileDetails product={product} setProduct={setProduct} deliveryPrice={deliveryPrice}/>
    </div>

    <div className="hidden sm:block bg-white py-8  mb-8">
        <div className=" grid grid-cols-12 ">
          <article className="left gap-3 flex !flex-nowrap max-h-[400px] col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-5 rounded bg-white">
            <ul className="p-2 hidden sm:block">
                <li className="mb-2">
                  <Link onClick={_=>setRotate_y('y_0')} className={`block w-[50px] h-[55px] p-[1px] overflow-hidden border-[1px] border-solid border-[#777] rounded-xl`}>
                    <img 
                      src={`/${product.image}.jpg`} alt={product.title}  className="w-[100%] h-[100%] y_0"/>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link onClick={_=>setRotate_y('y_45')} className={`block w-[50px] h-[55px] p-[1px] overflow-hidden border-[1px] border-solid border-[#777] rounded-xl`}>
                    <img 
                      src={`/${product.image}.jpg`} alt={product.title}  className="w-[100%] h-[100%] y_45"/>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link onClick={_=>setRotate_y('y_60')} className={`block w-[50px] h-[55px] p-[1px] overflow-hidden border-[1px] border-solid border-[#777] rounded-xl`}>
                    <img 
                      src={`/${product.image}.jpg`} alt={product.title}  className="w-[100%] h-[100%] y_60"/>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link onClick={_=>setRotate_y('y_90')} className={`block w-[50px] h-[55px] p-[1px] overflow-hidden border-[1px] border-solid border-[#777] rounded-xl`}>
                    <img 
                      src={`/${product.image}.jpg`} alt={product.title}  className="w-[100%] h-[100%] y_90"/>
                  </Link>
                </li> 
            </ul>
            <div className="m-auto relative flex-1 flex justify-center p-4  text-center h-[100%]">
              <img src={`/${product.image}.jpg`} alt={product.title} className={`product-details-img block flex-1 max-h-[100%] ${rotate_y} `}/>
              <button className="p-2 bg-white rounded-full absolute top-9 right-9 cursor-not-allowed" disabled>
                <i className="fa-solid fa-arrow-up-from-bracket text-3xl"></i>
              </button>
            </div>
          </article>

          <article className="center max-h-[400px] pt-3 overflow-visible col-span-12 sm:col-span-6  md:col-span-6 lg:col-span-4 p-2 rounded bg-[#ffffff8f]">
            <ProductDetailsInfo product={product} />
            <div className=" text-base xl:text-lg font-semibold mt-3 text-[#333]">
            {product.description}
            </div>
          </article>
          <article className="right col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 p-2 rounded bg-white">
            <ProductDelivery product={product} setProduct={setProduct}  deliveryPrice={deliveryPrice} />
          </article>
        </div>
    </div>
    </> 
  );
};

export default ProducDetails;
