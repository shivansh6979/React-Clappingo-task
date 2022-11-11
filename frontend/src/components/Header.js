import React from "react";
import logo from "/React-Clappingo/frontend/src/images/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const successHandler = () => {
    navigate("/login");
  };
  return (
    <div className="flex heading">
      <img src={logo} alt="logo" />
      <div className="flex-items">
        <span>Plans & Pricing</span>
        <span>Teach with us </span>
        <span>Affiliate Program</span>
        <span>Kids</span>
      </div>
      <button onClick={successHandler} className="head-button">
        <i className=" fas  fa-user"></i>Login
      </button>
    </div>
  );
};

export default Header;
