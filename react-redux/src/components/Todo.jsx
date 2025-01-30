import React from "react";
import { getTodos } from "../store/reducer/todo";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const getTodosHandler = () => {
    dispatch(getTodos());
  };
  return (
    <>
      <br />
      <br />
      <button onClick={getTodosHandler}>Get To Do</button>
      <section>
        {isLoading && <h1>getting datas</h1>}
        {!isLoading &&
          datas.map((data, index) => <p key={index}>{data.title}</p>)}
        {!isLoading && datas.length < 1 && <h1>Click to get todos</h1>}
      </section>
    </>
  );
};

export default Todo;
