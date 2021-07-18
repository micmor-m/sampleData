import React from "react";
import classnames from "classnames";

import "./CardHeader.scss";
import boltIcon from "../assets/images/boltIcon.svg";

const CardHeader = (props) => {
  let cardHeaderClass = classnames("card-header", {
    "card-header--manual": props.manual,
  });

  return (
    <h1 className={cardHeaderClass} onClick={props.onClick}>
      {props.isAuto && <img src={boltIcon} alt="bold-icon" />}
      {props.children}
    </h1>
  );
};

export default CardHeader;
