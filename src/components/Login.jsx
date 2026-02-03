import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Login = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-md
        px-4
      "
    >
      <form
        className="
          relative
          w-full max-w-sm
          bg-zinc-950/80 backdrop-blur-xl
          border border-white/20
          rounded-2xl
          p-7 sm:p-8
          text-white
          shadow-xl
        "
      >
        {/* ---------------- Close Button ---------------- */}
        <button
          onClick={() => setShowLogin(false)}
          type="button"
          className="
            absolute top-3 right-3
            w-8 h-8 flex items-center justify-center
            rounded-full
            text-zinc-300
            hover:text-white
            transition cursor-pointer
          "
        >
          ✕
        </button>

        {/* ---------------- Heading ---------------- */}
        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-2">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h1>

        <p className="text-zinc-400 text-sm text-center mb-6">
          {isSignup
            ? "Sign up to start generating images"
            : "Sign in to continue generating images"}
        </p>

        {/* ---------------- Full Name (Signup only) ---------------- */}
        {isSignup && (
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 mb-4">
            <img src={assets.profile_icon} alt="" className="w-4 opacity-70" />
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 bg-transparent outline-none text-sm placeholder-zinc-400"
            />
          </div>
        )}

        {/* ---------------- Email ---------------- */}
        <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 mb-4">
          <img src={assets.email_icon} alt="" className="w-4 opacity-70" />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-transparent outline-none text-sm placeholder-zinc-400"
          />
        </div>

        {/* ---------------- Password Group ---------------- */}
        <div className="space-y-3 mb-4">
          {/* Password */}
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2.5">
            <img src={assets.lock_icon} alt="" className="w-4 opacity-70" />
            <input
              type="password"
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-sm placeholder-zinc-400"
            />
          </div>

          {/* Confirm Password (Signup only) */}
          {isSignup && (
            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2.5">
              <img src={assets.lock_icon} alt="" className="w-4 opacity-70" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="flex-1 bg-transparent outline-none text-sm placeholder-zinc-400"
              />
            </div>
          )}
        </div>

        {/* ---------------- Forgot Password (Login only) ---------------- */}
        {!isSignup && (
          <div className="text-right mb-6">
            <button
              type="button"
              className="
                text-xs text-zinc-300
                hover:text-white hover:underline underline-offset-4
                transition
              "
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* ---------------- Submit Button ---------------- */}
        <button
          className="
            w-full
            px-5 py-2 text-sm
            bg-white text-black
            rounded-full font-medium
            hover:opacity-90
            active:scale-95
            transition cursor-pointer
          "
        >
          {isSignup ? "Create Account" : "Login"}
        </button>

        {/* ---------------- Toggle Footer ---------------- */}
        <p className="text-xs text-zinc-300 text-center mt-5">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-white cursor-pointer hover:underline"
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
