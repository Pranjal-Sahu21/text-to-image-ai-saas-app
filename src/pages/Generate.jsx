import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/AppContext";

export default function Generate() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const { user, generateImage } = useContext(AppContext);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.35 } },
  };

  const imagePop = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 140, damping: 14 },
    },
    exit: { opacity: 0, scale: 0.9 },
  };

  const spin = {
    animate: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 1, ease: "linear" },
    },
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);

    if (input) {
      const image = await generateImage(input);
      if (image) {
        setImage(image);
      }
    }
    setLoading(false);
  };

  const reset = () => {
    setImage(null);
    setInput("");
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 text-white">
      <AnimatePresence mode="wait">
        {!image && !loading && (
          <motion.div
            key="form"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-col items-center"
          >
            <div className="text-center mb-10 sm:mb-14 max-w-xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl leading-tight mb-4 sm:mb-6">
                Turn <span className="text-zinc-400">Ideas</span> Into
                <br />
                Stunning AI <span className="text-zinc-400">Images</span>
              </h1>

              <p className="text-zinc-400 font-light text-sm sm:text-lg leading-relaxed">
                Describe anything you imagine — artwork, photos, concepts or
                scenes — and let AI generate it in seconds.
              </p>
            </div>

            <motion.form
              onSubmit={onSubmitHandler}
              className="flex w-full max-w-md sm:max-w-lg
                         bg-white/10 backdrop-blur-md border border-white/20
                         rounded-full p-1 shadow-xl"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Describe your idea..."
                className="flex-1 bg-transparent outline-none
                           px-4 py-2 text-sm placeholder-zinc-400"
              />

              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-5 py-2 text-sm
                           bg-white text-black rounded-full font-medium
                           hover:opacity-90 transition cursor-pointer"
              >
                Generate
              </motion.button>
            </motion.form>
          </motion.div>
        )}

        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <motion.div
              variants={spin}
              animate="animate"
              className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-sm sm:text-base tracking-wide"
            >
              Generating your image...
            </motion.p>
          </motion.div>
        )}

        {image && !loading && (
          <motion.div
            key="result"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-col items-center gap-6 mt-8 w-full"
          >
            <h2 className="text-xl font-semibold text-center">
              Your image is ready ✨
            </h2>

            <motion.img
              src={image}
              alt="result"
              variants={imagePop}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.05 }}
              className="w-72 md:w-80 rounded-2xl shadow-2xl"
            />

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.button
                onClick={reset}
                className="px-5 py-2 text-sm bg-white text-black
                           rounded-full font-medium hover:opacity-90 active:scale-95 cursor-pointer transition"
              >
                Generate Another
              </motion.button>

              <motion.a
                href={image}
                download
                className="flex items-center justify-center px-5 py-2 text-sm
                           bg-zinc-900 text-white rounded-full border border-white/20
                           hover:bg-zinc-800 active:scale-95 transition"
              >
                Download
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
