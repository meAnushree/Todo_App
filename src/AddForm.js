import React from "react";
import Demo from "./Demo";
import Navbar from "./Navbar";

export default function AddForm({
  todoItem,
  inputChangeHandler,
  buttonClasses,
  inputIsValid,
  addItem,
  todoList,
  deleteItem,
}) {
  return (
    <div className="middle">
      <h1 className="tag">ToDo List</h1>
      <div className="input-group">
        <input
          className="input"
          type="text"
          value={todoItem}
          placeholder="Add a item"
          onChange={inputChangeHandler}
        />
        <button
          className={`button ${buttonClasses}`}
          disabled={!inputIsValid}
          onClick={addItem}
        >
          +
        </button>
      </div>
      <Navbar />

      <div className="list-con">
        <ol>
          {todoList.map((itemVal, index) => {
            return <Demo text={itemVal} id={index} onSelect={deleteItem} />;
          })}
        </ol>
      </div>
    </div>
  );
}
