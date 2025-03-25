import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
    const user = useSelector((store) => store.user);
    console.log(user);

    // ✅ Default profile icon
    const defaultProfileIcon = "https://cdn-icons-png.flaticon.com/512/847/847969.png";

    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between px-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
            </div>

            <div className="flex items-center gap-4">
                {/* ✅ Show Search Box ONLY if user is logged in */}
                {user && (
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="input input-bordered w-24 md:w-auto" 
                    />
                )}

                {/* ✅ Show Username ONLY if user is logged in */}
                {user && <p className="text-white">Welcome, {user.firstName || "User"}</p>}

                {/* ✅ Profile Avatar */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Profile"
                                src={user?.photoUrl || defaultProfileIcon} // ✅ Default profile pic if missing
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
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </>
                        ) : (
                            <li><a>Login</a></li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
