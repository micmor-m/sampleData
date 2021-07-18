import React from "react";
import classnames from "classnames";

import "./CardHeader.scss";

const CardHeader = (props) => {
  let cardHeaderClass = classnames("", { "": props.danger });

  return (
    <button className={cardHeaderClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default CardHeader;
