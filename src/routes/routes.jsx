import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../screens/Home";
import About from "../screens/About";
import Properties from "../screens/Properties";
import NotFound from "../screens/NotFound";
import Contact from "../screens/Contact";
import Reviews from "../screens/Reviews";
import Property from "../screens/Property";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/property/:id",
        element: <Property />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
