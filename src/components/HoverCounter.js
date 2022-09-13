import React from "react";
import withCounter from "../HOC/withCounter";

const HoverCounter = (props) => {
  return (
    <div>
      <h4 onMouseOver={props.incrementCounter}>Hovered {props.count} times</h4>
    </div>
  );
};

export default withCounter(HoverCounter, 10);
