import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <section className="container mx-auto flex flex-col gap-10 bg-neutral-800 py-10">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");

  if (!response.ok) {
    throw json({ message: "Posts not found" });
  } else {
    const data = await response.json();

    return data.posts;
  }
};

export default Posts;
