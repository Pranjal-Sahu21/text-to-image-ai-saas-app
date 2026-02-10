import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
};

const Steps = () => {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 sm:my-32 px-4 sm:px-6 pt-12"
    >
      <motion.h1 variants={fadeUp} className="text-2xl sm:text-4xl font-semibold text-white mb-3">
        How it works
      </motion.h1>

      <motion.p variants={fadeUp} className="text-zinc-400 mb-12 text-center">
        Transform words into stunning images
      </motion.p>

      <motion.div variants={stagger} className="w-full max-w-3xl space-y-5">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="flex gap-5 p-6 rounded-xl bg-zinc-900/60 border border-zinc-800"
          >
            <img src={item.icon} className="w-6 h-6" />
            <div>
              <h2 className="text-white font-medium">{item.title}</h2>
              <p className="text-zinc-400 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Steps;
