import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  let error = "Unknown Error";

  const nevigate = useNavigate();
  const routeError = useRouteError();
  if (routeError) {
    error = routeError.message;
  }
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-6 text-white">{error}</h1>
      <button
        className="px-4 py-2 bg-white text-neutral-800"
        onClick={() => nevigate("/")}
      >
        Go back to Home
      </button>
    </section>
  );
};

export default Error;
