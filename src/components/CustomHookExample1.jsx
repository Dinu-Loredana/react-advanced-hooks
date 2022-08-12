import React from "react";
import { useFetch } from "../hooks/useFetch";

export const CustomHookExample1 = () => {
  const { loading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  if (loading) return <h3>Loading....</h3>;
  if (error) return <p>{error}</p>;
  return (
    <ol>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  );
};
