import React, { useContext } from "react";
import { FirstContext } from "../FirstContext";

const Child2 = () => {
  const { live } = useContext(FirstContext);
  return (
    <>
      <div>Child2</div>
      <div>{live}</div>
    </>
  );
};

export default Child2;
