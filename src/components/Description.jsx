import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Description = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 sm:my-32 px-4 sm:px-8 lg:px-20"
    >
      <motion.h1
        variants={fadeUp}
        className="text-2xl sm:text-4xl font-semibold text-white text-center mb-3"
      >
        Create AI Images
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="text-zinc-400 text-sm sm:text-base mb-12 text-center max-w-md"
      >
        Turn your imagination into visuals
      </motion.p>

      <motion.div
        variants={fadeUp}
        className=" w-full max-w-6xl
          flex flex-col lg:flex-row
          items-center gap-10 lg:gap-16
          bg-zinc-900/60
          backdrop-blur-md
          border border-zinc-800
          rounded-2xl
          p-6 sm:p-10
          shadow-lg"
      >
        <motion.img
          src={assets.sample_img_1}
          whileHover={{ scale: 1.03 }}
          className="w-full max-w-xs sm:max-w-sm lg:max-w-md
            rounded-xl
            border border-zinc-800
            hover:scale-[1.02]
            transition duration-300"
        />

        <div>
          <h2 className="text-xl sm:text-3xl font-medium text-white mb-5 leading-snug">
            Introducing the AI-powered text to image generator
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base mb-4 leading-relaxed">
            Easily bring your ideas to life with our AI image generator. Whether
            you need stunning visuals or unique imagery, simply describe it and
            watch it transform into beautiful artwork instantly.
          </p>

          <p className="hidden sm:block text-zinc-500 text-sm sm:text-base leading-relaxed">
            Just type a prompt and our advanced AI generates high-quality images
            in seconds — from product visuals to characters and concepts that
            don’t yet exist. Creativity has no limits.
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/generate")}
            className="mt-5 px-5 py-2 text-sm
    bg-white text-black rounded-full font-medium
    hover:opacity-90 transition active:scale-95 cursor-pointer"
          >
            Try Now
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Description;
