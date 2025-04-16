import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import WorksPage from "./pages/works/Works";

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
        {
          path: "/portfolio",
          element: <WorksPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
