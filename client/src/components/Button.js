import React from "react";

function Button(props) {
  return (
    <button
      value={props.value}
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default Button;
