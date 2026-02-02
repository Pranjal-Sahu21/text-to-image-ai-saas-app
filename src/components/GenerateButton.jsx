import React from "react";
import { assets } from "../assets/assets";

const GenerateButton = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center mb-10">
        See the magic. Try now
      </h1>

      {/* Glassy Button */}
      <button
        className="
        inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-medium hover:opacity-90 cursor-pointer transition active:scale-95
      "
      >
        Generate 
        <img src={assets.star_group} alt="stars" className="h-6" />
      </button>
    </section>
  );
};

export default GenerateButton;
