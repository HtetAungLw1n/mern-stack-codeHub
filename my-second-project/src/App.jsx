import { useReducer } from "react";
import "./App.css";

const firstReducer = (state, action) => {
  switch (action.type) {
    case "minus":
      return { ...state, count: state.count - 1 };
    case "plus":
      return { ...state, count: state.count + 1 };
    case "input":
      return { ...state, key: action.value };

    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(firstReducer, { key: "", count: 0 });

  return (
    <>
      <div className="app">
        <input
          type="text"
          onChange={(e) => dispatch({ type: "input", value: e.target.value })}
        />
        <h3>{state.key}is form input.</h3>
        <button
          onClick={() => {
            dispatch({ type: "minus" });
          }}
        >
          -
        </button>
        <h3 className="num">{state.count}</h3>
        <button
          onClick={() => {
            dispatch({ type: "plus" });
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
