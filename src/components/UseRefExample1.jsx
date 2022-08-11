import React, { useRef } from "react";

export const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(inputRef.current); // returns DOM element
    // console.log(inputRef.current.value);
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "red";
    paraRef.current.innerText = "bye";
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control mb-2"
          ref={inputRef}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p ref={paraRef} onClick={() => inputRef.current.focus()}>
          hi
        </p>
      </form>
    </div>
  );
};
