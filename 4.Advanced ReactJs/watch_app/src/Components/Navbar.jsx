import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuth=useSelector((state)=>state.authReducer.isAuth)
  console.log(isAuth)
  return (
    <div data-testid="navbar">
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {!isAuth&&<Link to="/login" state={"/"}><button data-testid="navbar-login-button">LOGIN</button></Link>
}
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
      </div>
    </div>
  );
};

export default Navbar;
