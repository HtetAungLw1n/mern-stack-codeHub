import React from "react";
import { Link, NavLink, useRouteLoaderData } from "react-router-dom";

const NavBar = () => {
  const isToken = useRouteLoaderData("root");
  return (
    <>
      <section className="container mx-auto flex justify-between items-center p-4">
        <Link to={"/"} className="text-2xl font-bold">
          H.blog
        </Link>
        <div className="text-xl flex gap-4">
          <NavLink to={"/"} className="px-4 py-2">
            Posts
          </NavLink>
          {isToken && (
            <NavLink to={"/create-post"} className="px-4 py-2">
              Create Post
            </NavLink>
          )}
          {!isToken && (
            <NavLink to={"/auth?mode=login"} className="px-4 py-2">
              Login
            </NavLink>
          )}
          {isToken && (
            <NavLink to={"/logout"} className="px-4 py-2">
              Logout
            </NavLink>
          )}
        </div>
      </section>
    </>
  );
};

export default NavBar;
