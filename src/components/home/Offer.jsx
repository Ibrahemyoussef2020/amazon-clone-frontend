import React from "react";

const Offer = ({ offer }) => {
  return (
    <article className="max-w-[400px] min-h-[350px]  bg-white z-30 m-3 p-4 cursor-not-allowed">
      <h2 className="text-lg xl:text-xl font-semibold mt-0 mb-2 mx-0">
        <span>{offer.title} |</span>{" "}
        <span className="text-md text-[#333]">{offer.details}</span>
      </h2>
      <picture className="block">
        <img
          src={offer.image}
          alt={offer.title}
          className="h-[100%] w-[100%] object-cover mx-auto"
        />
      </picture>
      <p className="text-xs xl:text-sm text-blue-400 mt-1 mb-0 ml-2">
        <a
          href="#"
          className="block  mt-4 text-[#67bdcc] font-[500] pointer-events-none"
        >
          {offer.link}
        </a>
      </p>
    </article>
  );
};

export default Offer;