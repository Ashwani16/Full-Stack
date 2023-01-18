import React from "react";
import style from "../App.css"
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import Filter from "../Components/Filter";
import { Get_Data } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";
import { useLocation, useSearchParams } from "react-router-dom";

const Watches = () => {
  const location=useLocation()
  const [params,setParams]=useSearchParams()
  
  const dispatch=useDispatch();
const watches=useSelector((state)=>{
  return state.appReducer.watches
})
useEffect(()=>{
  dispatch(Get_Data({category:params.getAll("category")}))
},[location.search])

  return (
    <div>
      <Filter />
      <div className={style.watches}>
        {watches&&watches.map((e)=>{
          return <WatchCard key={e.id} data={e}/>
        })}
        {/* Map through the watch list here using WatchCard Component */}
      </div>
    </div>
  );
};

export default Watches;
