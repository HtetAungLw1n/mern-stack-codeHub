import Counter from "./components/Counter";
import Nav from "./components/Nav";
import Todo from "./components/Todo";
import Welcome from "./components/Welcome";

import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <>
      <Nav />

      {!isLogin && <Welcome />}

      {isLogin && <Counter />}

      <Todo />
    </>
  );
}

export default App;
