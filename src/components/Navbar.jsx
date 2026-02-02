import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 border-b border-zinc-800">
      <Link to="/" className="flex gap-2 items-center">
        <img
          src={assets.logo_icon}
          alt="logo icon"
          className="w-8 sm:w-10 lg:w-12"
        />
        <p className="text-white font-semibold text-2xl tracking-wide">crexo</p>
      </Link>

      {user ? (
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/buy")}
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full transition"
          >
            <img className="w-5" src={assets.credit_star} alt="credit star" />
            <p className="text-sm text-zinc-300">Credits: 50</p>
          </button>

          <p className="text-zinc-400 max-sm:hidden">Hi, Pranjal</p>

          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="user"
              className="w-10 drop-shadow"
            />
            <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-zinc-400 rounded pt-12">
              <ul className="bg-zinc-900 border border-zinc-800 rounded-md text-sm shadow-lg active:scale-95">
                <li className="px-4 py-2 hover:bg-zinc-800 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <p
            onClick={() => navigate("/buy")}
            className="cursor-pointer text-zinc-400 hover:text-white"
          >
            Pricing
          </p>

          <button className="bg-white text-black rounded-full px-6 py-2 font-medium hover:opacity-90 transition active:scale-95 cursor-pointer">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
