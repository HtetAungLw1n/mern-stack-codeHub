import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { title } = useParams();

  return (
    <>
      <div>ProductDetail page</div>
      <div>This is the product - {title}</div>
    </>
  );
};

export default ProductDetail;
