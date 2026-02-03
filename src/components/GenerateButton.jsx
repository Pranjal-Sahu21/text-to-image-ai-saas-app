import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const GenerateButton = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center mb-10">
        See the magic. Try now
      </h1>

      <button
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
      </button>
    </section>
  );
};

export default GenerateButton;
