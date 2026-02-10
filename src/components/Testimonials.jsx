import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center my-24 sm:my-32 px-4 overflow-hidden">
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

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {[...testimonialsData, ...testimonialsData].map(
            (testimonial, index) => (
              <div
                key={index}
                className="
                  shrink-0
                  w-60 sm:w-72 lg:w-80
                  h-68
                  p-6
                  rounded-2xl
                  bg-zinc-900/60
                  backdrop-blur-md
                  border border-zinc-800
                  text-center
                  mr-6
                  flex flex-col justify-between
                "
              >
                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-12 h-12 rounded-full mx-auto border border-zinc-700"
                />

                <div>
                  <h2 className="text-white font-medium text-sm sm:text-base">
                    {testimonial.name}
                  </h2>
                  <p className="text-zinc-500 text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>

                <div className="flex justify-center gap-1 opacity-80">
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

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ),
          )}
        </div>
      </div>

      <style>
        {`
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 56s linear infinite;
          }

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
