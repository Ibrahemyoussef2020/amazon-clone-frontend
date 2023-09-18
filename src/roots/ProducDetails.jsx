import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchSlectedData } from "../apis";

const ProducDetails = () => {
  const { part, productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchSlectedData(`/${part}`, setProduct, 1);
  }, [product]);

  console.log(product);

  return <div>{product.title}</div>;
};

export default ProducDetails;
