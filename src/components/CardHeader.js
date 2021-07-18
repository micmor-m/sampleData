import React from "react";
import classnames from "classnames";

import "./CardHeader.scss";
import boltIcon from "../assets/images/boltIcon.svg";

const CardHeader = (props) => {
  let cardHeaderClass = classnames("card-header", {
    "card-header--manual": props.originType === "manual",
  });

  return (
    <h1 className={cardHeaderClass}>
      {props.originType === "automated" && (
        <img src={boltIcon} alt="bold-icon" />
      )}
      {props.originType === "automated" ? "Automated Origin" : "Manual Origin"}
    </h1>
  );
};

export default CardHeader;
