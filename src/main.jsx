import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./MainLayout";
import ListedBooks from "./Pages/ListedBooks";
import AboutUs from "./Pages/AboutUs";
import PagesToRead from "./Pages/PagesToRead";
import ErrorPage from "./Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
   
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('books.json'),
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>

      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
