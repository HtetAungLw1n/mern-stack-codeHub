import React from "react";
import { Form, useActionData } from "react-router-dom";
import uuid from "react-uuid";
import { redirect } from "react-router-dom";

const PostForm = ({ header, btnText, oldpostData, method }) => {
  const data = useActionData();

  return (
    <>
      <div className="w-1/2 mx-auto">
        <p className="text-2xl">{header}</p>
        <Form method={method}>
          <div className="mt-10">
            <label htmlFor="title" className="block text-xl my-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="border-2 border-neutral-50 px-2 py-1 rounded w-full"
              required
              defaultValue={oldpostData ? oldpostData.title : ""}
            />
            {data && data.errors.title && (
              <p className="text-red-400 mt-2">* {data.errors.title}</p>
            )}
          </div>
          <div className="mt-10">
            <label htmlFor="image" className="block text-xl my-2">
              Image
            </label>
            <input
              type="url"
              src=""
              alt=""
              name="image"
              className="border-2 border-neutral-50 px-2 py-1 rounded w-full"
              required
              defaultValue={oldpostData ? oldpostData.image : ""}
            />
            {data && data.errors.image && (
              <p className="text-red-400 mt-2">* {data.errors.image}</p>
            )}
          </div>
          <div className="mt-10">
            <label htmlFor="date" className="block text-xl my-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="border-2 border-neutral-50 px-2 py-1 rounded w-full"
              required
              defaultValue={oldpostData ? oldpostData.date : ""}
            />
            {data && data.errors.date && (
              <p className="text-red-400 mt-2">* {data.errors.date}</p>
            )}
          </div>
          <div className="mt-10">
            <label htmlFor="date" className="block text-xl my-2">
              Description
            </label>
            <textarea
              type="text"
              cols="30"
              row="4"
              name="description"
              id="description"
              className="border-2 border-neutral-50 px-2 py-1 rounded w-full"
              required
              defaultValue={oldpostData ? oldpostData.description : ""}
            />
            {data && data.errors.description && (
              <p className="text-red-400 mt-2">* {data.errors.description}</p>
            )}
          </div>
          <button className="border-2 border-neutral-50 px-4 py-2 rounded mt-8 text-xl active:bg-neutral-600">
            {btnText}
          </button>
        </Form>
      </div>
    </>
  );
};

export default PostForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const method = request.method;
  let url = "http://localhost:8080/posts";

  const postData = {
    id: uuid(),
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
    date: data.get("date"),
  };

  if (method === "PATCH") {
    const id = params.id;
    url = `http://localhost:8080/posts/${id}`;

    console.log(url);
  }

  const response = await fetch(url, {
    method,
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
