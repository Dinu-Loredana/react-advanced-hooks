import React, { useState, memo, useCallback } from "react";

// When a component re-renders, every function inside of the component is recreated and therefore these functions’ references change between renders.
// useCallback return a memoized function, we use the same function object between renders.
// useful to prevent unnecessary renders of the child components that receives as props a function  on reference equality.
// uilize useCallback for the parent component, and also utilize React. memo for the child component.
export const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  //addTask (function - treated as object) is recreated on each render of this component. Child comp (Button) is rendered becauses receives the funct as props and it's a new funct every timpe the UseCallback renders ->child renders.
  // addTask callback is memoized by useCallback(). As long as dep is the same -setCount-, useCallback() returns the same function object. When <ParentComponent> re-renders, the function object remains the same and doesn’t break the memorization of <Button>.
  const addTask = useCallback(() => {
    console.log("add btn clicked");
    return setTasks((prevState) => [...prevState, "Some task"]);
  }, [setTasks]);

  // increment funct is not memoized (useCallback)--> when increment funct is called(click on increment btn), UseCallbackExample component renderes, so the child does (can see btn rendered c.log)
  // const increment = () => {
  //   console.log("increment btn clicked");
  //   setCount((c) => c + 1);
  // };
  const increment = useCallback(() => {
    console.log("increment btn clicked");
    setCount((c) => c + 1);
  }, [setCount]);

  console.log("Component rendered");

  return (
    <>
      <div>
        <Button addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
      <div>
        <button className="btn btn-secondary" onClick={increment}>
          Increment
        </button>
        <p>Count: {count}</p>
      </div>
    </>
  );
};

const Button = memo(({ addTask }) => {
  console.log("Btn rendered - child component");
  // to prevent unnecessary expensive list re-renderings,  wrap it into React.memo (could be a big list of data)
  return (
    <button className="btn btn-primary" onClick={addTask}>
      Add
    </button>
  );
});

const TaskList = memo(({ tasks }) => {
  //memo will cause React to skip rendering a component if its props have not changed. Without it, this comp renderes when increment button is clicked, because the parent comp renders and all its children. IF this child comp has to to an expensive calculation, use memo to renders only when its props have changed.
  console.log("TaskList rendered - child comp");
  return tasks.map((task, i) => <p key={i}>{task}</p>);
});

/*
- When a value in a component has changed, the component re-renders and all its children. If one of the Child has to do some expensive calculation, use React.memo for the Child comp so it will re-render only when its props have changed.
- If we are passing to a Child comp via props a function, when the Parent comp re-renders (a valus has updated), that function will be recreated (new function in the memor), the Child comp that is receiving via props renders. Wrap the function passed to Child via props with useCallback (returns memoized func, it's recreated only when depency has changed) and the Child comp with React.memo.
If we are using just memo, without useCallback, the comp Button will still rerender- evein if the props didn't change because of "referential equality".
Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed. Use the useCallback hook to prevent the function'addTask' from being recreated unless necessary.
Source: https://medium.com/@dev_one/how-to-use-usecallback-hook-35dc047aee48
*/
