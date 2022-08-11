import React, { useState, memo, useCallback } from "react";

export const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(
    () => setTasks((prevState) => [...prevState, "Some task"]),
    [setTasks]
  );

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, i) => (
        <p key={i}>{task}</p>
      ))}
    </div>
  );
};

const Button = memo(({ addTask }) => {
  console.log("Btn rendered");
  return (
    <button className="btn btn-primary" onClick={addTask}>
      Add
    </button>
  );
});

/*
If we are using just memo, without useCallback, the comp Button will still rerender- evein if the props didn't change because of "referential equality".
Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed. Use the useCallback hook to prevent the function'addTask' from being recreated unless necessary.
*/
