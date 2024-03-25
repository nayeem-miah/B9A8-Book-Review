import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 pb-6 pt-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <NavLink to='/'
            className={({ isActive }) =>
            isActive ? "text-primary font-bold border-2 border-green-500 p-1 rounded" : "font-bold"
            }>Home</NavLink>
            <NavLink to='/listed'
            className={({ isActive }) =>
            isActive ? "text-primary font-bold border-2 border-green-500 p-1 rounded" : "font-bold"
            }>Listed Books</NavLink>
            <NavLink to='/pages'
            className={({ isActive }) =>
            isActive ? "text-primary font-bold border-2 border-green-500 p-1 rounded" : "font-bold"
            }>Pages to Read</NavLink>
            <NavLink to='/about'
            className={({ isActive }) =>
            isActive ? "text-primary font-bold border-2 border-green-500 p-1 rounded" : "font-bold"
            }>About us</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-2xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-8 font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
            isActive ? "text-primary font-bold border-2 border-green-500 p-1 px-2 rounded" : "font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listed"
            className={({ isActive }) =>
            isActive ? "text-primary font-bold border-2 border-green-500 p-1 rounded" : "font-bold"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold border-2 border-green-500 p-1 rounded" : "font-bold"
            }
          >
            Pages to Read
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
            isActive ? "text-primary font-bold border-2 border-green-500 p-1 rounded" : "font-bold"
            }
          >
            About us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <Link className="btn bg-green-700">Sign In </Link>
        <Link className="btn bg-blue-600">Sign Up</Link>
      </div>
    </div>
  );
};

export default Nav;
