import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";

const Nav = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const logHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <section>
      <div>Redux Counter</div>
      {isLogin && (
        <>
          <ul>
            <li>My Record</li>
            <li>Profile</li>
            <li>
              <button onClick={logHandler}>Logout</button>
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default Nav;
