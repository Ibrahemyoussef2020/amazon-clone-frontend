import React, { useEffect, useState } from "react";
import Product from "./Product";
import { fetchData } from "../../apis";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(
    (_) => {
      fetchData("products", setProductData);
    },
    []
  );

  if(!productData?.length){
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
    <section>
      {productData?.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          img={product.image}
          link="Iam her as a Link"
        />
      ))}
    </section>
  );
};

export default Products;
