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
import BookDetails from "./Components/BookDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadBooks from "./Components/ReadBooks";
import WishlistBooks from "./Components/WishlistBooks";


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
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            index : true,
            element: <ReadBooks></ReadBooks>,
            loader: ()=>fetch('/books.json'),
          },
          {
            path: 'wish',
            element: <WishlistBooks></WishlistBooks>,
            // loader: ()=>fetch('books.json'),

          },
        ],
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>

      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch('../books.json'),
 
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
     <ToastContainer />
  </React.StrictMode>
  
);
