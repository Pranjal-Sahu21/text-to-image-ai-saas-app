import { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6 } },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.12 } },
  };
  return (
    <div className="min-h-screen text-white px-6 pt-24 pb-16">
      <motion.div
        initial="hidden"
        animate="show"
        className="text-center mb-14 mt-10"
      >
        <motion.h1
          variants={fadeUp}
          className="mt-6 text-3xl sm:text-4xl font-semibold"
        >
          Choose the perfect plan
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-zinc-400 text-sm sm:text-base mt-3"
        >
          Buy credits and start generating stunning AI images
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 max-w-6xl mx-auto
      "
      >
        {plans.map((item, index) => (
          <motion.div
          variants={fade}
            key={index}
            className="
              bg-white/10 backdrop-blur-md border border-white/20
              rounded-2xl p-8
              hover:bg-white/15 hover:scale-[1.02]
              transition duration-300
              flex flex-col
            "
          >
            <img src={assets.logo_icon} alt="logo" className="w-8 mb-5" />

            <p className="font-semibold text-lg text-white">{item.id}</p>

            <p className="text-zinc-400 text-sm mt-2 flex-grow">{item.desc}</p>

            <p className="mt-6">
              <span className="text-3xl font-semibold text-white">
                ${item.price}
              </span>
              <span className="text-zinc-400 text-sm ml-2">
                / {item.credits} credits
              </span>
            </p>

            <button
              className="
                mt-6 px-5 py-2 text-sm
                bg-white text-black rounded-full font-medium
                hover:opacity-90 transition active:scale-95 cursor-pointer
              "
            >
              {user ? "Purchase" : "Get started"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BuyCredit;
