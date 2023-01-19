import React, { useEffect, useRef, useState } from "react";

export const UseRefExample1 = () => {
  const [val, setVal] = useState("");

  const inputRef = useRef();
  const paraRef = useRef();

  const accessDivEl = useRef();
  const accessInputEl = useRef();
  // 1)  ACCESS DOM ELEMENT DIRECTLY AND MANIPULATE IT)
  // In general, we want to let React handle all DOM manipulation. But there are some instances where useRef can be used without causing issues.In React, we can add a ref attribute to an element to access it directly in the DOM.
  useEffect(() => {
    // access div el
    accessDivEl.current.textContent =
      "This element has been accesed and manipulated via useRef hook.";
    accessDivEl.current.style.backgroundColor = "olive";
    // access input el
    accessInputEl.current.focus();
    accessInputEl.current.value = "Input manipulated via useRef";
  });

  // 2) DOEST NOT CAUSE RE-RENDERS
  // If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.

  // useEffect(() => {
  //   countRenders.current = countRenders.current + 1;
  // }, [val]);
  const submitHandler = (e) => {
    e.preventDefault();
    inputRef.current.value = "Input  manipulated with useRef";
    inputRef.current.style.backgroundColor = "lightgreen";
    paraRef.current.innerText = "Text added with useRef";
  };

  console.log("Renders");
  console.log("VALUE", val);
  return (
    <>
      <div>
        <div
          style={{ padding: "10px", border: "1px solid black" }}
          ref={accessDivEl}
        />
        <input type="text" className="form-control mb-2" ref={accessInputEl} />
      </div>

      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control mb-2"
            ref={inputRef}
            placeholder="Click on button for filling the input"
            disabled={true}
          />

          <button type="submit" className="btn btn-primary">
            Click here
          </button>
          <p ref={paraRef}></p>
        </form>
      </div>
    </>
  );
};
