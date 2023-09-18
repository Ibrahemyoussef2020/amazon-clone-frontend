import React from "react";
import { useSelector } from "react-redux";

import {
  Carousel,
  CarouselProducts,
  CarouselCategory,
  Offers,
  CarouselTodaysOffers,
  CarouselPets,
  CarouselSavingCorner,
  CarouselConsider,
  CarouselHair,
  CarouselSports,
  CarouselVisited,
} from "../components";

const Home = () => {
  const section = useSelector((state) => state.section);
  const brand = useSelector((state) => state.brand);
  const type = useSelector((state) => state.type);

  return (
    <div className="bg-costum-clr_secondary">
      <Carousel />
      <Offers />
      <CarouselProducts />
      <CarouselCategory />
      <CarouselTodaysOffers />
      <CarouselPets />
      <CarouselSavingCorner />
      <Offers offers="offers_two" />
      <CarouselConsider />
      <Offers offers="offers_three" />
      <CarouselSports />
      <CarouselHair />
      <CarouselVisited />
    </div>
  );
};

export default Home;
