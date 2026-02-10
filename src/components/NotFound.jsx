import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-white bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-center
          bg-zinc-900/60 backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-10 sm:p-14
          shadow-2xl
          max-w-md w-full
        "
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-7xl sm:text-8xl font-bold mb-4 text-white/90"
        >
          404
        </motion.h1>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
          The page you're looking for doesn’t exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-2 text-sm font-medium
                bg-white text-black
                rounded-full
                hover:opacity-90
                transition cursor-pointer
              "
            >
              Go Home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
