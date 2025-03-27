import { batch, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";


const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  //console.log(user);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {}
  };

  
  const defaultProfileIcon =
    "https://cdn-icons-png.flaticon.com/512/847/847969.png";

  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          DevTinder
        </Link>
      </div>

      <div className="flex items-center gap-4">
      
        {user && (
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        )}

    
        {user && (
          <p className="text-white">Welcome, {user.firstName || "User"}</p>
        )}

   
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Profile"
                src={user?.photoUrl || defaultProfileIcon} 
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
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
