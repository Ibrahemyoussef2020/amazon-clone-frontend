import React, { useEffect, useState } from "react";
import Offer from "./Offer";
import { fetchData } from "../../apis";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Offers = ({ offers = "offers" , allOffers }) => {
  
  const [OfferData, setOfferData] = useState([]);

  useEffect(
    (_) => {
      fetchData(offers, setOfferData);
    },
    []
  );

  if(!OfferData?.length){
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
    <section
      className={`offers-grid-cols justify-center ${
        offers === "offers" ? "-mt-[10px]  md:-mt-[250px]" : "my-5"
      }`}
    >
      {OfferData?.map((offer) => (
        <Offer key={offer.id} offer={offer} classes={offer.classes && !allOffers  ? offer.classes : ''} />
      ))}
    </section>
  );
};

export default Offers;
