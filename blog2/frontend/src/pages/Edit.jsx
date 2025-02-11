import React from "react";
import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";

const Edit = () => {
  const oldpostData = useRouteLoaderData("post-detail");
  return (
    <section className="container mx-auto mt-10 h-screen">
      <PostForm
        header={"Edit your post"}
        btnText={"Edit Post"}
        oldpostData={oldpostData}
        method={"PATCH"}
      />
    </section>
  );
};

export default Edit;
