import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <div>Home page</div>
      <button onClick={navigateHandler}>go to products</button>
    </>
  );
};

export default Home;
