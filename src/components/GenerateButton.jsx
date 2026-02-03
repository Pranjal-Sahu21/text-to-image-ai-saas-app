import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GenerateButton = () => {
  const navigate = useNavigate();
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <motion.h1
        variants={fadeUp}
        className="text-2xl sm:text-4xl font-semibold text-white text-center mb-10"
      >
        See the magic. Try now
      </motion.h1>

      <motion.button
        variants={fade}
        onClick={() => navigate("/generate")}
        className="
    inline-flex items-center gap-2 
    px-5 py-2 text-sm
    bg-white text-black rounded-full font-medium
    hover:opacity-90 cursor-pointer transition active:scale-95
  "
      >
        Generate
        <img src={assets.star_group} alt="stars" className="h-4" />
      </motion.button>
    </motion.section>
  );
};

export default GenerateButton;
