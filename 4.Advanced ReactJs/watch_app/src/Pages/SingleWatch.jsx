import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";

const SingleWatch = () => {
  const {id}=useParams()
  const watchs=useSelector((state)=>state.appReducer.watches)
  const watch=watchs.find((e)=>e.id==id)
  console.log(watch)
  return (
    <div>
      <h2>{watch.name}</h2>
      <div>
        <img src={watch.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{watch.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
