import React from "react";
import { useState } from "react";
import Button from "./Button";
import styles from "./h1.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello First React</h1>
      <Button text={"save"} />
    </div>
  );
}

export default App;
