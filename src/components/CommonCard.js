import React from "react";

import ButtonGroup from "components/ButtonGroup";
import CardHeader from "components/CardHeader";
import CardBody from "components/CardBody";
import CardFooter from "components/CardFooter";

import "./CommonCard.scss";

const CommonCard = (props) => {
  return (
    <article className="commonCardClass">
      <CardHeader>Automated Origin</CardHeader>
      {/* <CardHeader manual>Manual Origin</CardHeader> */}
      <CardBody title={"Skill Name"} subTitle={"42 Intents"} />
      <ButtonGroup />
      <CardFooter timestamp={"Jan 23, 2021 @ 4:32am"} />
    </article>
  );
};

export default CommonCard;
