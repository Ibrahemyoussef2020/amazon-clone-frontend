import React from "react";

const Product = ({ item }) => {
  return (
    <article className="max-w-[400px] min-h-[320px] bg-white z-30 m-3">
      <h2 className="text-lg xl:text-xl font-semibold mt-1 mb-1 ml-2">
        iam her as a title
      </h2>
      <picture className="block">
        <img
          src={item.img}
          alt={item.title}
          className="h-[100%] w-[100%] object-cover"
        />
      </picture>
      <p className="text-xs xl:text-sm text-blue-400 mt-1 mb-1 ml-2">
        <a href="#">{item.link}</a>
      </p>
    </article>
  );
};

export default Product;
