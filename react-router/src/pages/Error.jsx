import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  let error = "Unknown Error";

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  const routeError = useRouteError();
  console.log(routeError);
  if (routeError.status === 500) {
    error = routeError.data.message;
  } else if (routeError.stat === 404) {
    error = routeError.data.message;
  }
  return (
    <>
      <h1>{error}</h1>;<button onClick={navigateHandler}>Go back home</button>
    </>
  );
};

export default Error;
