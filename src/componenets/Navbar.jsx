import { batch, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";
import { DEFAULT_PROFILE_PIC } from "../utils/constants";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`navbar bg-gradient-to-r from-red-400 to-blue-700 text-white shadow-lg flex justify-between p-4 py-2 fixed top-0 left-0 w-full z-50 pr-10 pl-10 ${
        location.pathname === "/login" ? "absolute top-0 left-1/2 -translate-x-1/2" : ""
      }`}
    >
      <div className="flex-1">
        <span
          className="btn btn-ghost text-xl cursor-pointer"
          onClick={() => {
            if (user) {
              navigate("/");
            } else {
              alert("Please login to access the home page!");
              navigate("/login");
            }
          }}
        >
          DevTinder
        </span>
      </div>

      <div className="flex items-center gap-4">
        {user && <p className="text-white">Welcome, {user.firstName || "User"}</p>}

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                src={
                  user?.photoUrl && user.photoUrl.trim() !== ""
                    ? user.photoUrl
                    : DEFAULT_PROFILE_PIC
                }
                alt="User Profile"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-r from-yellow-500 to-red-400 text-white rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/requests">Requests</Link>
                </li>
                <li>
                  <Link to="/Premium">Premium</Link>
                </li>
                <li>
                  <a
                    onClick={() => {
                      dispatch(removeUser());
                      navigate("/login");
                    }}
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
