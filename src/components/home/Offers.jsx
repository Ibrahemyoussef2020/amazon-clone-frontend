import React, { useEffect, useState } from "react";
import Offer from "./Offer";
import { fetchData } from "../../apis";

const Offers = ({ offers = "offers" }) => {
  const [OfferData, setOfferData] = useState([]);

  useEffect(
    (_) => {
      fetchData(offers, setOfferData);
    },
    [OfferData]
  );

  return (
    <section
      className={`offers-grid-cols justify-center ${
        offers === "offers" ? "-mt-[10px]  md:-mt-[250px]" : "my-5"
      }`}
    >
      {OfferData?.map((offer) => (
        <Offer key={offer.id} offer={offer} />
      ))}
    </section>
  );
};

export default Offers;
