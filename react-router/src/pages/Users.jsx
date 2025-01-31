import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  return (
    <section>
      {users.map((user) => (
        <Link to={""} key={user.id} className="user">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.username}</p>
        </Link>
      ))}
    </section>
  );
};

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (response.ok) {
    const users = await response.json();
    console.log(users);
    return users;
  } else {
    throw json({ message: "User not found", status: 400 });
  }
};
export default Users;
