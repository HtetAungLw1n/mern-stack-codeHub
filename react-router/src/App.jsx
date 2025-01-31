import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./layout/Main";
import { About, Home, Products, ProductDetail, Error } from "./pages/index";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/productDetail/:title", element: <ProductDetail /> },
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
