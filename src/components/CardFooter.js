import React from "react";
import classnames from "classnames";

import "./CardFooter.scss";

const CardFooter = (props) => {
  let cardFooterClass = classnames("card-footer");

  return (
    <div className={cardFooterClass}>
      <p>Last Updated: </p>
      <p> {props.timestamp}</p>
    </div>
  );
};

export default CardFooter;
