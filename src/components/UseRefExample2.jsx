import { useState, useEffect, useRef } from "react";

// The useRef Hook can also be used to keep track of previous state values.
// This is because we are able to persist useRef values between renders.
function UseRefExample2() {
  const [name, setName] = useState("");

  const renders = useRef(0); // set a reference to the number of renders
  const prevName = useRef("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name; //In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.
  }, [name]);

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}

export default UseRefExample2;
