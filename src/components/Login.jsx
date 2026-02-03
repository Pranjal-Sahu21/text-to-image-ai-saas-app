import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => setShowLogin(false)}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 backdrop-blur-md
        px-4
      "
    >
      <motion.form
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={(e) => e.stopPropagation()}
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
        <motion.button
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
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.div
            key={isSignup ? "signup" : "login"}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <h1 className="text-xl sm:text-2xl font-semibold text-center mb-2">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h1>

            <p className="text-zinc-400 text-sm text-center mb-6">
              {isSignup
                ? "Sign up to start generating images"
                : "Sign in to continue generating images"}
            </p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {isSignup && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                marginBottom: 16,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginBottom: 0,
                transition: { duration: 0.15, ease: "easeIn" },
              }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2.5">
                <img
                  src={assets.profile_icon}
                  alt=""
                  className="w-4 opacity-70"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="flex-1 bg-transparent outline-none text-sm placeholder-zinc-400"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 mb-4"
        >
          <img src={assets.email_icon} alt="" className="w-4 opacity-70" />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-transparent outline-none text-sm placeholder-zinc-400"
          />
        </motion.div>

        <motion.div
          layout
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="space-y-3 mb-4"
        >
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2.5">
            <img src={assets.lock_icon} alt="" className="w-4 opacity-70" />
            <input
              type="password"
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-sm placeholder-zinc-400"
            />
          </div>

          <AnimatePresence initial={false}>
            {isSignup && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.15, ease: "easeIn" },
                }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 mt-3">
                  <img
                    src={assets.lock_icon}
                    alt=""
                    className="w-4 opacity-70"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="flex-1 bg-transparent outline-none text-sm placeholder-zinc-400"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence initial={false}>
          {!isSignup && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                marginBottom: 24,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginBottom: 0,
                transition: { duration: 0.15, ease: "easeIn" },
              }}
              className="text-right overflow-hidden"
            >
              <button
                type="button"
                className="
                  text-xs text-zinc-300
                  hover:text-white cursor-pointer hover:underline underline-offset-4
                  transition
                "
              >
                Forgot password?
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          layout
          transition={{ duration: 0.15 }}
          className="
            w-full
            px-5 py-2 text-sm
            bg-white text-black
            rounded-full font-medium
            hover:opacity-90
            transition cursor-pointer
            active:scale-95 mt-3
          "
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isSignup ? "signup-btn" : "login-btn"}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.1 }}
              className="inline-block"
            >
              {isSignup ? "Create Account" : "Login"}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <motion.p
          layout
          transition={{ duration: 0.2 }}
          className="text-xs text-zinc-300 text-center mt-5"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isSignup ? "signup-footer" : "login-footer"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {isSignup
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
            </motion.span>
          </AnimatePresence>
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-white cursor-pointer hover:underline"
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Login;
