import React from "react";
import Button from "./Button";

import "./ButtonGroup.scss";

const GroupButton = (props) => {
  return (
    <div className="button-group">
      <Button>View</Button>
      <Button danger>Remove</Button>
    </div>
  );
};

export default GroupButton;
