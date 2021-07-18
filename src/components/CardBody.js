import React from "react";
import classnames from "classnames";

import "./CardBody.scss";

const CardBody = (props) => {
  let cardBodyClass = classnames("card-body");

  return (
    <div className={cardBodyClass}>
      <h1>{props.title}</h1>
      <p> {props.subTitle}</p>
    </div>
  );
};

export default CardBody;
