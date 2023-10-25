import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext)
  const handleLogout = () => {
    logoutUser()
      .then(res => {
        Swal.fire(
          'Thank You',
          'Log Out Successfully please log in',
          'success'
        )
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  const navLinks = <>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-secondary" : ""
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-secondary" : ""
      }
    >
      About
    </NavLink>
    <NavLink
      to="/services"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-secondary" : ""
      }
    >
      Services
    </NavLink>
    <NavLink
      to="/blog"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-secondary" : ""
      }
    >
      Blog
    </NavLink>
    <NavLink
      to="/Contact"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-secondary" : ""
      }
    >
      Contact
    </NavLink>
  </>
  const loginNavLinks = <>
    <NavLink
      to="/order"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-secondary" : ""
      }
    >
      Order
    </NavLink>
    <NavLink
      to="/orderReview"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-secondary" : ""
      }
    >
      Order Review
    </NavLink>
    <NavLink
      to="/manageInventory"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "btn btn-secondary" : ""
      }
    >
      Manage Inventory
    </NavLink>

    {
      user ? <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "" : ""
        }
      >
        <button onClick={handleLogout}>Logout</button>
      </NavLink>
        :
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "" : ""
          }
        >
          Login
        </NavLink>
    }
  </>
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start gap-11 md:gap-64 lg:gap-0">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {loginNavLinks}
            </ul>
          </div>
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex justify-center gap-10 items-center">
            {navLinks}
          </ul>
          <ul className="menu menu-horizontal px-1 flex justify-center gap-10 items-center">
            {loginNavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-warning">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;