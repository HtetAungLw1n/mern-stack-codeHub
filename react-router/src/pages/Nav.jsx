import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </ul>
    </>
  );
};

export default Nav;
