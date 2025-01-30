import React, { createContext, useState } from "react";

export const FirstContext = createContext();

const FirstContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("hurricane");
  const [live, setLive] = useState("ygn");
  return (
    <>
      <FirstContext.Provider value={{ userName, live }}>
        {children}
      </FirstContext.Provider>
    </>
  );
};

export default FirstContextProvider;
