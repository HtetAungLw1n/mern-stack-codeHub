import React, { useRef } from "react";

const Form = (props) => {
  const newName = useRef();
  const newAddress = useRef();

  const submit = (event) => {
    event.preventDefault();

    if (
      newName.current.value.trim().length === 0 ||
      newAddress.current.value.trim().length === 0
    ) {
      alert("Please Fill vaild info");
      return;
    }

    const newStudent = {
      name: newName.current.value,
      address: newAddress.current.value,
    };

    props.addNewStudent(newStudent);
    newName.current.value = "";
    newAddress.current.value = "";
  };

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" placeholder="Name" ref={newName} />
        <input type="text" placeholder="Address" ref={newAddress} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;
