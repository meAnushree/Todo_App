import React, { useState } from "react";
import Demo from "./Demo";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listItems = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    console.log("Deleted..");

    setItem((oldItem) => {
      return oldItem.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main">
        <div className="middle">
          <h1 className="tag">ToDo List</h1>
          <input
            className="input"
            type="text"
            value={inputList}
            placeholder="Add a item"
            onChange={itemEvent}
          />
          <button className="button" onClick={listItems}>
            +
          </button>
          <ol>
            {/* <li>{inputList}</li> */}

            {item.map((itemVal, index) => {
              return <Demo text={itemVal} id={index} onSelect={deleteItem} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
