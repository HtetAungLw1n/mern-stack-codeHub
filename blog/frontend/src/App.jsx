import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./layouts/Main";
import Error from "./pages/Error";
import Posts, { loader as postsLoader } from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import {
  action as editPostAction,
  action as createPostAction,
} from "./components/PostForm";
import Detail, { loader as postLoader } from "./pages/Detail";
import Edit from "./pages/Edit";
import { action as deletePostAction } from "./components/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Posts />, loader: postsLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
      {
        path: ":id",
        id: "post-detail",
        loader: postLoader,
        children: [
          {
            index: true,
            element: <Detail />,
            action: deletePostAction,
          },
          { path: "edit-post", element: <Edit />, action: editPostAction },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <section className="bg-neutral-800 text-neutral-50">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
