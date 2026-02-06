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

const images = [
  assets.sample_img_1,
  assets.sample_img_2,
  assets.sample_img_3,
  assets.sample_img_4,
  assets.sample_img_5,
  assets.sample_img_6,
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center text-center my-32 overflow-hidden"
    >
      <motion.h1
        variants={fadeUp}
        className="mt-14 text-4xl sm:text-7xl max-w-4xl"
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
        whileHover={{ opacity: 0.9 }}
        onClick={() => navigate("/generate")}
        className="mt-6 px-5 py-2 bg-white text-black rounded-full flex items-center gap-2 text-sm font-medium cursor-pointer"
      >
        Generate Images
        <img className="h-4" src={assets.star_group} alt="" />
      </motion.button>

      <div className="sm:hidden relative w-full mt-14 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-10 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="header-marquee">
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              className="
                w-28 h-28
                rounded-xl
                object-cover
                border border-zinc-800
                mr-4
                shrink-0
              "
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={stagger}
        className="hidden sm:flex flex-wrap justify-center mt-16 gap-3"
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            className="rounded-lg border border-zinc-800"
            width={70}
            src={img}
          />
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="mt-3 text-zinc-500 text-sm">
        Generated images from crexo
      </motion.p>

      <style>
        {`
          .header-marquee {
            display: flex;
            width: max-content;
            animation: headerMarquee 18s linear infinite;
          }

          @keyframes headerMarquee {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </motion.div>
  );
};

export default Header;
