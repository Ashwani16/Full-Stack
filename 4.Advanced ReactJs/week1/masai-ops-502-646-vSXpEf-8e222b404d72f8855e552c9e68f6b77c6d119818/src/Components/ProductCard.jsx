import React from "react";

// get the product item details through the props
const ProductCard = ({data}) => {
  const {image,brand,price,title}=data;
  return <div data-testid="productcard">
    <img src={image} />
    <p>Brand : {brand}</p>
    <p>Price : {price}</p>
    <h2>{title}</h2>
  </div>;
};

export default ProductCard;
