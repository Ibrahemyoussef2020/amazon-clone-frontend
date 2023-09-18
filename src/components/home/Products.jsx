import React, { useEffect, useState } from "react";
import Product from "./Product";
import { fetchData } from "../../apis";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(
    (_) => {
      fetchData("products", setProductData);
    },
    [productData]
  );

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
