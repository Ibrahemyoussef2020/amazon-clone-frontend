import React from "react";
import ProductPadge from "./ProductPadge";
import ProductRating from "./ProductRating";

const ProductDetailsInfo = ({ product }) => {
  return (
    <div className="mb-4 border-b	 border-solid  border-gray-400 capitalize">
      <h2 className="text-xl xl:text-2xl font-semibold mb-1">{product.title}</h2>
      <div className="text-sm xl:text-base mb-1 lowercase">by <span className=" text-blue-500 capitalize font-semibold">{product.brand}</span></div>
      <div className="text-xs xl:text-sm font-bold mb-1">
        <ProductRating avgRating={product.avgRating} ratings={product.ratings} />
      </div>
      <div className="text-sm xl:text-base text-green-600 font-bold  mb-1">{product.avgRating}</div>
      <div className="text-xs xl:text-sm font-bold mb-1">{product.type}</div>
      <div className="mb-4">
        <ProductPadge badge={product.badge} />
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
