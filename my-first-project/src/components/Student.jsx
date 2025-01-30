import React from "react";

const Student = (props) => {
  return (
    <>
      <div className="box">
        <div className="name">Name: {props.name}</div>
        <div className="address">Address: {props.address}</div>
      </div>
    </>
  );
};

export default Student;
