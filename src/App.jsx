import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
