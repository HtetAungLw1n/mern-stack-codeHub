import React, { useContext } from "react";
import { FirstContext } from "../FirstContext";

const Child3 = () => {
  const { userName } = useContext(FirstContext);
  return (
    <>
      <div>Child3</div>
      <div>{userName}</div>
    </>
  );
};

export default Child3;
