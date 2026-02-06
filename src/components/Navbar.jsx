import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { FiLogOut, FiUser } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const { user, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  const { setShowLogin } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <span
              onClick={() => navigate("/buy")}
              className="text-zinc-300 whitespace-nowrap cursor-pointer"
            >
              Credits: {credit}
            </span>
          </button>

          <p className="text-zinc-400 max-sm:hidden text-medium">
            Hi, {user.name}
          </p>

          <div ref={menuRef} className="relative">
            <img
              src={assets.profile_icon}
              alt="user"
              onClick={() => setOpen(!open)}
              className="w-9 sm:w-10 rounded-full drop-shadow cursor-pointer ring-2 ring-zinc-700 hover:ring-zinc-500 transition"
            />

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 mt-3 w-44 sm:w-30 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-300 border-b border-zinc-800 sm:hidden">
                    <FiUser size={16} />
                    <div className="flex flex-col">
                      <span>Hi, {user.name}</span>
                      <span className="text-xs text-zinc-500">
                        {user.email}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-zinc-800 active:bg-zinc-700 active:scale-95 cursor-pointer transition"
                  >
                    <div className="flex w-full justify-center items-center gap-1.5">
                      <FiLogOut size={16} />
                      Logout
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
