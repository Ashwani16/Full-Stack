import React from "react";
import {Button,ButtonGroup,Select} from "@chakra-ui/react"
const Pagination = ({page,setPage,total,limit,setLimit}) => {
  // TODO: Remove below const and instead import them from chakra
  

  return (
    <ButtonGroup>
      <Button disabled={page<=1} onClick={()=>{ setPage(1)}} data-cy="pagination-first-button">first</Button>
      <Button disabled={page<=1} onClick={()=>{ setPage((p)=>p-1)}} data-cy="pagination-previous-button">Pre</Button>
      <Select onChange={(e)=>{ setLimit(e.target.value)}} data-cy="pagination-limit-select">
      <option value={3}  data-cy="pagination-limit-3">3</option>
        <option value={6} data-cy="pagination-limit-6">6</option>
        <option value={9} data-cy="pagination-limit-9">9</option>
      </Select>
      <Button disabled={page>=total} onClick={()=>{ setPage((p)=>p+1)}} data-cy="pagination-next-button">next</Button>
      <Button disabled={page>=total} onClick={()=>{ setPage(total)}} data-cy="pagination-last-button">last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
