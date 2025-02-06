import React from "react";
import PostForm from "../components/PostForm";
import uuid from "react-uuid";
import { redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <section className="container mx-auto mt-10 h-screen">
      <PostForm header={"Create your post"} btnText={"Create"} />
    </section>
  );
};

export default CreatePost;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const postData = {
    id: uuid(),
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
    date: data.get("date"),
  };

  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Can't Post" });
  } else {
    return redirect("/");
  }
};
