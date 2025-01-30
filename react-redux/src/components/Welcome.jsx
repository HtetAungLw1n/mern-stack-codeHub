import React from "react";
import { authActions } from "../store/authReducer";
import { useDispatch } from "react-redux";

const Welcome = () => {
  const dispatch = useDispatch();
  const logHandler = () => {
    dispatch(authActions.login());
  };
  return <button onClick={logHandler}>Login to Redux Counter</button>;
};

export default Welcome;
