import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const setCount = () => {
    setCounter((prev) => prev + 1);
  };
  const helloOnce = () => {
    console.log("Hello");
  };
  useEffect(helloOnce, []);
  return (
    <div>
      <h1>Hello First React</h1>
      <h2>{counter}</h2>
      <button onClick={setCount}>Click now</button>
    </div>
  );
}

export default App;
