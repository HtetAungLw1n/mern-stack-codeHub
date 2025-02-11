import React from "react";
import PostForm from "../components/PostForm";

const CreatePost = () => {
  return (
    <section className="container mx-auto mt-10 h-screen">
      <PostForm
        header={"Create your post"}
        btnText={"Create"}
        method={"POST"}
      />
    </section>
  );
};

export default CreatePost;
