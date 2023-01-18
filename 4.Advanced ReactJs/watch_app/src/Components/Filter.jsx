import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [params,setParams]=useSearchParams()
  
  const [category,setCategory]=useState(params.getAll("category"))
const changeHandler=(e)=>{
  if(category.includes(e.target.value)){
  
    setCategory((c)=>c.filter((d)=>d!=e.target.value))
  }else{
    
    setCategory([...category,e.target.value])
  }
}
useEffect(()=>{
  setParams({category})
},[category])

  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div onChange={changeHandler} data-testid="filter-category">
        <div>
          <input type="checkbox" defaultChecked={category.includes("Analog")} value="Analog" />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={category.includes("Digital")} value="Digital" />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={category.includes("Chronograph")} value="Chronograph" />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
