import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from "@chakra-ui/react"
const Product = ({product}) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <Stack key={product.id+"a"} data-cy="product">
      <Image  boxSize='250px' data-cy="product-image" src={product.img} alt="image" />
      <Text data-cy="product-category">{product.category}</Text>
      <Tag>
        <TagLabel data-cy= "product-brand">{product.brand}</TagLabel>
      </Tag>
      <Heading data-cy="product-details">{product.details}</Heading>
      <Box data-cy="product-price">{product.price}</Box>
    </Stack>
  );
};

export default Product;
