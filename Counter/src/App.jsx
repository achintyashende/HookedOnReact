import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((count) => count + 1);
  }

  function decreaseCount() {
    setCount((count) => count - 1);
  }
  function reset(){
    setCount(0);
  }

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <p>Count : {count}</p>
      </div>
        <button onClick={decreaseCount}>Decrease Count</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increaseCount}>Increase Count</button>
    </>
  );
}

export default App;
