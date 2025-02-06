import { CalendarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Form, Link, redirect, useSubmit } from "react-router-dom";

const PostDetail = ({ post }) => {
  const { title, image, description, date } = post;
  const submit = useSubmit();
  const deletePostHandler = () => {
    const confirm = window.confirm("Are you sure that you want to delete");

    if (confirm) {
      submit(null, { method: "DELETE" });
    }
  };
  return (
    <>
      <div className="w-[40%] mx-auto bg-neutral-700 rounded-2xl my-5 overflow-hidden pb-5">
        <div className="h-72 overflow-hidden">
          <img src={image} alt={title} className="w-full" />
        </div>
        <div className="p-5 ">
          <p className="text-lg">{title}</p>

          <div className="flex gap-2 mt-2">
            <CalendarIcon className="size-6" />
            <p className="text-gray-300">{date}</p>
          </div>
          <p className="mt-6">{description}</p>
        </div>
        <div className="pl-5 flex gap-4 text-center">
          <Link to={`edit-post`}>
            <p className="bg-neutral-800 p-2 rounded mt-8 w-20 text-xl active:bg-neutral-600">
              Edit
            </p>
          </Link>
          <Form>
            <p
              onClick={deletePostHandler}
              className="bg-neutral-800 p-2 rounded mt-8 w-20 text-xl active:bg-neutral-600"
            >
              Delete
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default PostDetail;

export const action = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Can't delete" });
  }

  return redirect("/");
};
