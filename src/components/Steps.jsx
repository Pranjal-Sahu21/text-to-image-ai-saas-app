import React from "react";
import { stepsData } from "../assets/assets";

const Steps = () => {
  return (
    <section className="flex flex-col items-center justify-center my-24 sm:my-32 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-4xl font-semibold text-white mb-3 text-center">
        How it works
      </h1>

      <p className="text-zinc-400 text-sm sm:text-base mb-10 sm:mb-14 text-center max-w-md">
        Transform words into stunning images
      </p>

      <div className="w-full max-w-3xl space-y-4 sm:space-y-5">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="
              group
              flex flex-col sm:flex-row
              items-center sm:items-start
              text-center sm:text-left
              gap-4 sm:gap-5
              p-5 sm:p-6 sm:px-8
              rounded-xl
              bg-zinc-900/60 backdrop-blur-md
              border border-zinc-800
              hover:border-zinc-700
              hover:bg-zinc-900/80
              hover:-translate-y-1
              transition-all duration-300
              cursor-pointer
            "
          >
            <div className="
              flex items-center justify-center
              w-12 h-12
              bg-zinc-900
              rounded-lg
              group-hover:bg-zinc-800
              transition
            ">
              <img
                src={item.icon}
                alt="step icon"
                className="w-5 h-5 opacity-90"
              />
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-medium text-white">
                {item.title}
              </h2>

              <p className="text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
