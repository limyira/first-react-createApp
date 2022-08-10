import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const Search = (event) => {
    setKeyword(event.target.value);
  };
  const setCount = () => {
    setCounter((prev) => prev + 1);
  };
  const helloOnce = () => {
    console.log("Hello");
  };
  useEffect(helloOnce, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <h1>Hello First React</h1>
      <h2>{counter}</h2>
      <input
        value={keyword}
        onChange={Search}
        placeholder="Search now"
        type="text"
      ></input>
      <button onClick={setCount}>Click now</button>
      <h6>{keyword}</h6>
    </div>
  );
}

export default App;
