import React from "react";

import ButtonGroup from "components/ButtonGroup";
import CardHeader from "components/CardHeader";
import CardBody from "components/CardBody";
import CardFooter from "components/CardFooter";

import "./CommonCard.scss";

const CommonCard = (props) => {
  return (
    <article className="commonCardClass">
      <CardHeader originType={props.originType}></CardHeader>
      {/* <CardHeader manual>Manual Origin</CardHeader> */}
      <CardBody title={props.name} subTitle={props.intents} />
      <ButtonGroup />
      <CardFooter timestamp={props.dateUpdated} />
    </article>
  );
};

export default CommonCard;
