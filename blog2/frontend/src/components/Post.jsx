import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/24/solid";

const Post = ({ post }) => {
  const { id, image, title, date } = post;
  return (
    <>
      <div className="w-[40%] mx-auto bg-neutral-700 rounded overflow-hidden">
        <div className="h-72 overflow-hidden">
          <Link to={`${id}`}>
            <img src={image} alt={title} className="w-full" />
          </Link>
        </div>
        <div className="p-5 ">
          <Link to={`${id}`}>
            <p className="text-lg">{title}</p>
          </Link>
          <div className="flex gap-2 mt-2">
            <CalendarIcon className="size-6" />
            <p className="text-gray-300">{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
