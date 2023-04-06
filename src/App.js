import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";

import "./App.css";
import MovieInformation from "./pages/MovieInformation/MovieInformation";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:movieId",
    element: <MovieInformation />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
