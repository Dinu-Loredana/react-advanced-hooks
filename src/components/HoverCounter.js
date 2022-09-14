import React from "react";
import withCounter from "../HOC/withCounter";

const HoverCounter = (props) => {
  const { text } = props;
  console.log(text);
  return (
    <div>
      <h4 onMouseOver={props.incrementCounter}>Hovered {props.count} times</h4>
      <p>{text.toUpperCase()}</p>{" "}
      {/* if there is not text props provided by parent, it'll be a runtime error, that crashes the app - white screen - with wrapp the comp with Error Boundary comp, it will display an error UI instead of white screen*/}
    </div>
  );
};

export default withCounter(HoverCounter, 10);
