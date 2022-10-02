import React from "react";

function Button(props) {
  return (
    <button
      value={props.value}
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      //size={props?.size}
    >
      {props.title}
    </button>
  );
}

export default Button;
