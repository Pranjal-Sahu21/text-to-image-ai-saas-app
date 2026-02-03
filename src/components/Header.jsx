import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center text-center my-32"
    >
      <motion.h1
        variants={fadeUp}
        className="text-4xl sm:text-7xl mt-10 max-w-4xl"
      >
        Turn text to <span className="text-zinc-400">image</span>, in seconds.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-zinc-400 font-light max-w-xl mt-5 text-sm sm:text-lg leading-relaxed"
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        instantly — just type and generate.
      </motion.p>

      <motion.button
        variants={fadeUp}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/generate")}
        className="mt-6 px-5 py-2 bg-white text-black rounded-full flex items-center gap-2 text-sm font-medium"
      >
        Generate Images
        <img className="h-4" src={assets.star_group} alt="" />
      </motion.button>

      <motion.div
        variants={stagger}
        className="flex flex-wrap justify-center mt-16 gap-3"
      >
        {Array(5)
          .fill("")
          .map((_, index) => (
            <motion.img
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              className="rounded-lg border border-zinc-800 max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              width={70}
            />
          ))}
      </motion.div>
      <motion.p variants={fadeUp} className="mt-3 text-zinc-500 text-sm">
        Generated images from crexo
      </motion.p>
    </motion.div>
  );
};

export default Header;
