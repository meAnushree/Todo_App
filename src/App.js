import React, { useEffect, useState } from "react";
import Demo from "./Demo";
import "./App.css";

const App = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("todo_list");
    if (data !== null) {
      setTodoList(JSON.parse(data));
    }
  }, []);

  const inputChangeHandler = (event) => {
    setTodoItem(event.target.value);
  };

  const addItem = () => {
    setTodoList((oldItem) => {
      const newList = [...oldItem, todoItem];
      storeInLocalStorage(newList);
      return newList;
    });
    setTodoItem("");
  };

  const deleteItem = (id) => {
    console.log("Deleted");

    setTodoList((oldItem) => {
      const newList = oldItem.filter((arrayElement, index) => {
        return index !== id;
      });
      storeInLocalStorage(newList);
      return newList;
    });
  };

  const storeInLocalStorage = (value) => {
    localStorage.setItem("todo_list", JSON.stringify(value));
  };

  const inputIsValid = todoItem.trim().length !== 0;
  const buttonClasses = inputIsValid ? "" : "disabled";

  return (
    <>
      <div className="main">
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

          <div className="list-con">
            <ol>
              {todoList.map((itemVal, index) => {
                return <Demo text={itemVal} id={index} onSelect={deleteItem} />;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
