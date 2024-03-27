import { useEffect, useState } from "react";
import Book from "../Components/Book";
import { getBooks } from "../Components/LocalStorage/LocalStorage";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import ReadBooks from "../Components/ReadBooks";

const ListedBooks = () => {
  
  const [index, setIndex] = useState(0);

  

  return (
    <div>
      {/* <div className="grid grid-cols-1 gap-8"> </div> */}
      <div className="text-center font-bold text-3xl bg-gray-300 p-3 mb-4 rounded-xl">
        Books{" "}
      </div>
      <div className="text-center items-center mb-36">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-400 m-1 text-xl"
          >
            Sort By{" "}
            <span className="">
              <IoMdArrowDropdown></IoMdArrowDropdown>
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Rating</Link>
            </li>
            <li>
              <Link>Number of pages</Link>
            </li>
            <li>
              <Link>Publisher year</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to=''
            onClick={()=>setIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${index=== 0 ? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>

          </Link>
           
          <Link
          onClick={()=>setIndex(1)}
            to={`wish`}

            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${ index===1 ? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>
          </Link>
         
        </div>
        
          <Outlet></Outlet>
          {/* <ReadBooks></ReadBooks> */}
      </div>
    </div>
  );
};

export default ListedBooks;
