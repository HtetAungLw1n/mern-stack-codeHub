import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import PostDetail from "../components/PostDetail";

const Detail = () => {
  const post = useRouteLoaderData("post-detail");

  return (
    <section className="h-screen">
      <PostDetail post={post} />
    </section>
  );
};

export default Detail;

export const loader = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);

  if (!response.ok) {
    throw json({ message: "Posts not found" });
  } else {
    const data = await response.json();
    return data.post;
  }
};
