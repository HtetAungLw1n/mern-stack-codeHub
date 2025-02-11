import React from "react";
import AuthForm from "../components/AuthForm";
import { redirect } from "react-router-dom";

const Auth = () => {
  return (
    <section className="container mx-auto mt-10 h-screen">
      <AuthForm />
    </section>
  );
};

export default Auth;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw new Error("");
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  // validation
  if (response.status === 422 && response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw new Error("gfdsgfd");
  }

  const responseData = await response.json();
  const token = responseData.token;

  localStorage.setItem("token", token);

  return redirect("/");
};
