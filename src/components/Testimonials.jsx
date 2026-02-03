import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center my-24 sm:my-32 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-4xl font-semibold text-white text-center mb-3"
      >
        Customer Testimonials
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-zinc-400 text-sm sm:text-base mb-12 text-center max-w-md"
      >
        What our users are saying
      </motion.p>

      <div className="relative w-full overflow-hidden lg:hidden">
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div
          style={{
            display: "flex",
            width: `${testimonialsData.length * 220 * 2}px`,
            animation: "marquee 20s linear infinite",
          }}
        >
          {[...testimonialsData, ...testimonialsData].map(
            (testimonial, index) => (
              <div
                key={index}
                className="
                shrink-0
                w-55 sm:w-60
                p-5
                rounded-2xl
                bg-zinc-900/60
                backdrop-blur-md
                border border-zinc-800
                text-center
                mr-4
              "
              >
                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-12 h-12 rounded-full mb-2 mx-auto border border-zinc-700"
                />
                <h2 className="text-white font-medium text-sm wrap-break-word">
                  {testimonial.name}
                </h2>
                <p className="text-zinc-500 text-xs mb-2 wrap-break-word">
                  {testimonial.role}
                </p>
                <div className="flex justify-center gap-1 mb-2 opacity-80">
                  {Array(testimonial.stars)
                    .fill(0)
                    .map((_, i) => (
                      <img
                        key={i}
                        src={assets.rating_star}
                        alt="star"
                        className="w-3 h-3"
                      />
                    ))}
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed wrap-break-word">
                  "{testimonial.text}"
                </p>
              </div>
            ),
          )}
        </div>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="hidden lg:grid grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="
              group
              p-6
              rounded-2xl
              bg-zinc-900/60
              backdrop-blur-md
              border border-zinc-800
              hover:border-zinc-700
              hover:bg-zinc-900/80
              transition-all duration-300
              shadow-md
              text-center
              cursor-pointer
            "
          >
            <img
              src={testimonial.image}
              alt="testimonial"
              className="w-14 h-14 rounded-full border border-zinc-700 mb-3 mx-auto"
            />
            <h2 className="text-white font-medium text-lg">
              {testimonial.name}
            </h2>
            <p className="text-zinc-500 text-sm mb-4">{testimonial.role}</p>
            <div className="flex justify-center gap-1 mb-4 opacity-80">
              {Array(testimonial.stars)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src={assets.rating_star}
                    alt="rating"
                    className="w-4 h-4"
                  />
                ))}
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              "{testimonial.text}"
            </p>
          </motion.div>
        ))}
      </motion.div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
