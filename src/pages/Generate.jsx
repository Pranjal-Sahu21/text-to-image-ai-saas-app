import React, { useState } from "react";
import { assets } from "../assets/assets";

const Generate = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);

    setTimeout(() => {
      setImage(assets.sample_img_1);
      setLoading(false);
    }, 2000);
  };

  const reset = () => {
    setImage(null);
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-white">
      {/* ---------------- INITIAL STATE ---------------- */}
      {!image && !loading && (
        <>
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14 max-w-xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl leading-tight mb-4 sm:mb-6">
              Turn <span className="text-zinc-400">Ideas</span> Into
              <br />
              Stunning AI <span className="text-zinc-400">Images</span>
            </h1>

            <p className="text-zinc-400 font-light text-sm sm:text-lg leading-relaxed">
              Describe anything you imagine — artwork, photos, concepts or
              scenes — and let AI generate it in seconds.
            </p>
          </div>

          {/* Input */}
          <form
            onSubmit={onSubmitHandler}
            className="flex w-full max-w-md sm:max-w-lg
                       bg-white/10 backdrop-blur-md border border-white/20
                       rounded-full p-1"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Describe your idea..."
              className="flex-1 bg-transparent outline-none
                         px-3 sm:px-4 py-2 text-sm placeholder-zinc-400"
            />

            <button
              type="submit"
              className="px-4 sm:px-5 py-2 text-sm
                         bg-white text-black rounded-full font-medium
                         hover:opacity-90 transition active:scale-95 cursor-pointer"
            >
              Generate
            </button>
          </form>
        </>
      )}

      {/* ---------------- LOADING ---------------- */}
      {loading && (
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* ---------------- RESULT ---------------- */}
      {image && !loading && (
        <div className="flex flex-col items-center gap-5 sm:gap-6 mt-6 sm:mt-8 w-full">
          <h2 className="text-base sm:text-xl font-semibold text-center">
            Your image is ready ✨
          </h2>

          {/* Image */}
          <img
            src={image}
            alt="result"
            className="w-52 sm:w-72 md:w-80 rounded-xl shadow-lg"
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-4 w-[60%] sm:w-auto mt-4">
            <button
              onClick={reset}
              className="px-5 py-2 text-sm bg-white text-black
                         rounded-full font-medium hover:opacity-90
                         transition active:scale-95 w-full sm:w-auto cursor-pointer"
            >
              Generate Another
            </button>

            <a
              href={image}
              download
              className="flex items-center justify-center px-5 py-3 text-sm bg-zinc-900 text-white
                         rounded-full border border-white/20
                         hover:bg-zinc-800 transition active:scale-95
                         text-center w-full sm:w-auto"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generate;
