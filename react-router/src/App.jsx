import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./layout/Main";
import { loader as productsLoader } from "./pages/Products";
import { loader as productLoader } from "./pages/ProductDetail";
import { loader as usersLoader } from "./pages/Users";
import {
  About,
  Home,
  Products,
  ProductDetail,
  Error,
  Users,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products />, loader: productsLoader },
      {
        path: "/productDetail/:id",
        element: <ProductDetail />,
        loader: productLoader,
      },
      { path: "/users", element: <Users />, loader: usersLoader },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
