import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const { setShowLogin } = useContext(AppContext);

  return (
    <nav className="w-full fixed top-0 bg-zinc-950/60 backdrop-blur-md border-b border-zinc-800 px-4 sm:px-6 md:px-10 lg:px-12 py-5 flex items-center justify-between z-100">
      <Link to="/" className="flex gap-2 items-center">
        <img
          src={assets.logo_icon}
          alt="logo icon"
          className="w-7 sm:w-8 lg:w-10"
        />
        <p className="text-white font-semibold text-xl sm:text-2xl tracking-wide">
          crexo
        </p>
      </Link>

      {user ? (
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <button
            onClick={() => navigate("/buy")}
            className="flex items-center gap-1 sm:gap-2 bg-zinc-800 hover:bg-zinc-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base transition"
          >
            <img
              className="w-4 sm:w-5"
              src={assets.credit_star}
              alt="credit star"
            />
            <span className="text-zinc-300 whitespace-nowrap">Credits: 50</span>
          </button>

          <p className="text-zinc-400 max-sm:hidden text-medium">Hi, Pranjal</p>

          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="user"
              className="w-8 sm:w-10 rounded-full drop-shadow cursor-pointer"
            />
            <div className="absolute hidden group-hover:block right-0 mt-2 z-10">
              <ul className="bg-zinc-900 border border-zinc-800 rounded-md text-sm shadow-lg">
                <li className="px-4 py-2 hover:bg-zinc-800 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 sm:gap-4">
          <p
            onClick={() => navigate("/buy")}
            className="cursor-pointer text-zinc-400 hover:text-white text-sm sm:text-base whitespace-nowrap"
          >
            Pricing
          </p>

          <button
            onClick={() => setShowLogin(true)}
            className="bg-white text-black rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium hover:opacity-90 transition active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
