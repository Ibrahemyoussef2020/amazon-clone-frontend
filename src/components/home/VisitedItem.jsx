import React from "react";

const VisitedItem = ({ product, rat }) => {
  return (
    <article className="w-[200px] m-auto p-3 flex flex-col justify-center  gap-3">
      <img
        src={`${product.image}.jpg`}
        alt={product.title}
        className="max-w-[200px] max-h-[150px]"
      />
      <a href="#" className="text-[#007185] text-sm">
        {product.description}
      </a>
      <p>EGP{product.price}</p>
      <div>
        {new Array(5).fill("").map((_, i) => {
          if (i < product.avgRating) {
            return (
              <i key={i} className="fa-solid fa-star  text-yellow-400"></i>
            );
          } else {
            return <i key={i} className="fa-regular fa-star text-yellow-400"></i>;
          }
        })}
      </div>
      <p className="text-xs">{product.title}</p>
    </article>
  );
};

export default VisitedItem;
