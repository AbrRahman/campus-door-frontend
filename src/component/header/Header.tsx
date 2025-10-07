import { Link, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { logOut } from "../../redux/features/auth/authSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "College", path: "/college" },
    { name: "Admission", path: "/admission" },
  ];

  return (
    <div className="bg-violet-950 lg:py-2">
      <div className=" container mx-auto  lg:px-20">
        <div className="navbar bg-violet-950">
          <div className="navbar-start">
            {/* for small device */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-white lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-violet-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {menuItems.map(({ name, path }) => (
                  <li className="text-slate-100 hover:text-slate-300">
                    <Link to={path}>{name}</Link>
                  </li>
                ))}
                {user && (
                  <li className="">
                    <button
                      onClick={handleLogout}
                      className="text-slate-100  lg:hidden hover:text-slate-300"
                    >
                      LogOut
                    </button>
                  </li>
                )}
                {!user && (
                  <>
                    <li className="">
                      <Link
                        to="/login"
                        className="text-slate-100  lg:hidden hover:text-slate-300"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        to="/register"
                        className="text-slate-100  lg:hidden hover:text-slate-300"
                      >
                        <Link to="/register">Register</Link>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <Link to="/" className="text-2xl  font-bold text-blue-400 ">
              CampusDoor
            </Link>
          </div>

          {/* large device */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItems.map(({ name, path }) => (
                <li className="text-slate-100 hover:text-slate-300">
                  <Link to={path}>{name}</Link>
                </li>
              ))}
              {user && (
                <>
                  <li className="text-slate-100 hover:text-slate-300">
                    <Link to="/my-college">My College</Link>
                  </li>
                  <li className="text-slate-100 hover:text-slate-300">
                    <Link to="/profile">Profile</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 space-x-3">
              {user && (
                <>
                  <li className="">
                    <p className="text-slate-100 flex flex-col lg:flex-row gap-0 lg:gap-1">
                      <span> Welcome: </span>
                      <span className="font-semibold"> {user?.name}</span>
                    </p>
                  </li>
                  <li className="">
                    <button
                      onClick={handleLogout}
                      className="text-slate-100 hidden lg:block bg-blue-500 hover:bg-blue-400 transition duration-300 px-3 py-1"
                    >
                      LogOut
                    </button>
                  </li>
                </>
              )}
              {!user && (
                <>
                  <li className="">
                    <Link
                      to="/login"
                      className="text-slate-100 hidden lg:block bg-blue-500 hover:bg-blue-400 transition duration-300 px-3 py-1"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/register"
                      className="text-slate-100 hidden lg:block bg-blue-500 hover:bg-blue-400 transition duration-300 px-3 py-1"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
