import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const handleTodo = (event) => {
    setToDo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleTodo}
          value={toDo}
          type="text"
          placeholder="Wirte your to do.."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
