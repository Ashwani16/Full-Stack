import React from "react"; 
import { Link } from "react-router-dom";

const WatchCard = ({data}) => {
  const { id,name ,image,category}=data
  return (
    <div data-testid={`watch-card-wrapper-${id}`}>
      <div>
        <Link to={`/watches/${id}`}><img data-testid="watch-card-image" src={image} alt="" /></Link>
      </div>
      <div>
        <div data-testid="watch-name">{name}</div>
        <div data-testid="watch-category">{category}</div>
      </div>
    </div>
  );
};

export default WatchCard;
