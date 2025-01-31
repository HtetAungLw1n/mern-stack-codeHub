import React from "react";
import Nav from "../pages/Nav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Main;
