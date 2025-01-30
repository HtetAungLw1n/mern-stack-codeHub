import { useState } from "react";
import "./App.css";
import Student from "./components/Student";
import Form from "./components/Form";

function App() {
  const [allInfo, setAllInfo] = useState([]);

  const addNewStudent = (newStudent) => {
    setAllInfo([...allInfo, newStudent]);
  };

  let boxSection = <p>No Student</p>;

  if (allInfo.length > 0) {
    boxSection = allInfo.map((student, index) => (
      <Student name={student.name} address={student.address} key={index} />
    ));
  }

  return (
    <>
      <div className="main">{boxSection}</div>
      <Form addNewStudent={addNewStudent} />
    </>
  );
}

export default App;
