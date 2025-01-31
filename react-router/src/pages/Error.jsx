import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Page not found</h1>;
      <button onClick={navigateHandler}>Go back home</button>
    </>
  );
};

export default Error;
