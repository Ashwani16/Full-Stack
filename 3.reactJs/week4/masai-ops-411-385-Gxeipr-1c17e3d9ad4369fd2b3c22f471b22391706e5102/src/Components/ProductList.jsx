import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({data=[]}) => {
  return <div data-testid="products-container">{data.map((e) => {
    return <ProductItem  key={1+Date.now()+e.id} item={e}/>
  })}</div>;
};
//toString(Date.now()+e.id+Math.random*Math.random)
// export
export default ProductList;
