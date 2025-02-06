import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./layouts/Main";
import Posts, { loader as postsLoader } from "./pages/Posts";
import CreatePost, { action as createPostAction } from "./pages/CreatePost";
import Error from "./pages/Error";
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
          { path: "edit-post", element: <Edit /> },
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
