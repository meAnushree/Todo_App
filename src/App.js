import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("Buy");
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  return (
    <>
      <div className="main">
        <div className="middle">
          <h1 className="tag">Todo List</h1>
          <input
            className="input"
            type="text"
            placeholder="Add a item"
            onChange={itemEvent}
          />
          <button className="button">+</button>
          <ol>
            <li>{inputList}</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
