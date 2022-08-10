import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(0);
  const onClick = () => setShowing((prev) => prev + 1);
  const Hello = () => {
    return <h1>{showing}</h1>;
  };
  return (
    <div>
      {showing >= 5 ? <Hello /> : 0}
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
