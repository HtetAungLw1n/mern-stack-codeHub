import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterReducer.js";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.isShow);
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };
  const increaseBy5Handler = () => {
    dispatch(counterActions.increaseBy5(5));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };
  const toggle = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <section>
      <h3>Redux Counter</h3>
      {isShow && <h1>{counter}</h1>}

      <button onClick={increaseHandler}>Increase</button>
      <button onClick={increaseBy5Handler}>IncreaseBy5</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={toggle}>Toggle</button>
    </section>
  );
};

export default Counter;
