import { useMemo, useState, useEffect, useRef } from "react";

export const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(1);

  // const sqrt = getSqrt(number);
  // whithout useMemo, getSqrt fn is called even if the number state is not changed

  const sqrt = useMemo(() => getSqrt(number), [number]);
  const renders = useRef(1);
  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };
  console.log(inc);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="btn btn-primary" onClick={onClick}>
        Rerender
      </button>
      <h3>Renders: {renders.current}</h3>
      <h3>
        The sqr root of {number} is: {sqrt}
      </h3>
    </div>
  );
};

const getSqrt = (number) => {
  for (let i = 1; i <= 1000; i++) {
    console.log(i);
  }

  return Math.sqrt(number);
};
