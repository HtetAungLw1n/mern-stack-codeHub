import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

const AuthForm = () => {
  const data = useActionData();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  // submitting or not showing code
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <section>
      <div className="w-1/2 mx-auto">
        <p className="text-2xl font-semibold">
          {isLogin ? "Login to your account" : "Register new account"}
        </p>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <Form method="POST">
          <div className="mt-10">
            <label htmlFor="email" className="block text-xl my-2">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="border-2 border-neutral-50 px-2 py-1 rounded w-full"
              required
            />
          </div>
          <div className="mt-10">
            <label htmlFor="password" className="block text-xl my-2">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="border-2 border-neutral-50 px-2 py-1 rounded w-full"
              required
            />
          </div>

          <button className="border-2 border-neutral-50 px-4 py-2 rounded mt-8 text-xl active:bg-neutral-600">
            {isSubmitting ? "Submitting" : isLogin ? "Login" : "Register"}
          </button>

          {isLogin ? (
            <p className="mt-10">
              Don't have a account?{" "}
              <Link to={"/auth?mode=signup"} className="text-golden">
                create account
              </Link>
            </p>
          ) : (
            <p className="mt-10">
              Already have a account?{" "}
              <Link to={"/auth?mode=login"} className="text-golden">
                login
              </Link>
            </p>
          )}
        </Form>
      </div>
    </section>
  );
};

export default AuthForm;
