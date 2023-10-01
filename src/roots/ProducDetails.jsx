import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchSlectedData } from "../apis";
import { ProductBuy, ProductDetailsInfo } from "../components";

const ProducDetails = () => {
  const params = useParams();
  const { part, productId } = params;
  const [product, setProduct] = useState({});

  //console.log(part);

  useEffect(() => {
      fetchSlectedData(part , setProduct, productId);
  }, [productId]);

  if (!product?.id) return <h2>Loading....</h2>;

  return (
    <div className=" bg-costum-clr_secondary py-8 px-2 lg:px-4 mb-8">
        <div className=" grid grid-cols-10 gap-2">
          <article className="left px-4 lg:px-8 py-4 col-span-10 sm:col-span-4 md:col-span-3 rounded bg-white">
            <div className="m-auto flex items-center justify-center p-4 text-center h-[100%] border border-solid border-[#ccc]">
              <img src={`/${product.image}.jpg`} alt={product.title} />
            </div>
          </article>
          <article className="center col-span-10 sm:col-span-6 md:col-span-5 p-4 rounded bg-[#ffffff8f]">
            <ProductDetailsInfo product={product} />
            <div className=" text-base xl:text-lg font-semibold mt-3 text-[#333]">
            {product.description}
            </div>
          </article>
          <article className="right col-span-10 sm:col-span-10 md:col-span-2 p-4 rounded bg-white">
            <ProductBuy product={product} />
          </article>
        </div>
    </div>
  );
};

export default ProducDetails;
