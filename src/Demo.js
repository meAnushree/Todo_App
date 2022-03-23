import React from "react";
import image from "./images/delete.png";
import style from "./Demo.css";

const Demo = (props) => {
  return (
    <>
      <div className="demo-main">
        <img
          className="trash"
          src={image}
          onClick={() => {
            props.onSelect(props.id);
          }}
          alt=""
        />
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default Demo;
