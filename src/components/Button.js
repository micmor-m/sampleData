import React from "react";
import classnames from "classnames";

import "./Button.scss";

export default function Button(props) {
  let buttonClass = classnames("button", { "button--danger": props.danger });

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
