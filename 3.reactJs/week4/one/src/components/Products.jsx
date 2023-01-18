import axios from "axios";
import {useState,useEffect} from "react";
import {Flex,Grid} from "@chakra-ui/react"
import Product from "./Product";
import Pagination from "./Pagination";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1)
  const [total,setToatal]=useState(0)
  const [limit,setLimit]=useState(3);

  useEffect(()=>{
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?page=${page}&limit=${limit}`)
    .then((res)=>{
      console.log(res)
      setToatal(res.data.totalPages)
      setData(res.data.data)
    })
  },[page,limit])
 

  return (
    <Flex flexDirection={'column'}>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>{
        data.map((e)=>{
          return <Product product={e}/>
        })
      }</Grid>
      {/* Pagination */}
      <Pagination page={page} limit={limit} setLimit={setLimit} setPage={setPage} total={total}/>
    </Flex>
  );
};

export default Products;
