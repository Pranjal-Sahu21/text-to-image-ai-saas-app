import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function GenerateButton() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, delay: 0.15 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <motion.h1
        variants={fadeUp}
        className="text-2xl sm:text-4xl font-semibold text-white text-center mb-10"
      >
        See the magic. Try now
      </motion.h1>

      <motion.button
        variants={fadeUp}
        whileHover={{ opacity: 0.9 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/generate")}
        className="inline-flex items-center gap-2 
                   px-5 py-2 text-sm
                   bg-white text-black rounded-full font-medium
                   hover:opacity-90 cursor-pointer"
      >
        Generate
        <img src={assets.star_group} alt="stars" className="h-4" />
      </motion.button>
    </motion.section>
  );
}
