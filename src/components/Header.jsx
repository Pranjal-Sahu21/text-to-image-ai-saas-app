import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center text-center my-32">
      <h1 className="text-4xl sm:text-7xl mt-10 max-w-4xl">
        Turn text to <span className="text-zinc-400">image</span>, in seconds.
      </h1>

      <p className="text-zinc-400 font-light max-w-xl mt-5 text-sm sm:text-lg leading-relaxed">
        Unleash your creativity with AI. Turn your imagination into visual art
        instantly — just type and generate.
      </p>

      <button
        onClick={() => navigate("/generate")}
        className="mt-6 px-5 py-2 bg-white text-black rounded-full 
                   flex items-center gap-2 text-sm font-medium 
                   hover:opacity-90 transition active:scale-95 cursor-pointer"
      >
        Generate Images
        <img className="h-4" src={assets.star_group} alt="star group" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(5)
          .fill("")
          .map((_, index) => (
            <img
              key={index}
              className="rounded-lg border border-zinc-800 hover:scale-105 transition cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt="sample"
              width={70}
            />
          ))}
      </div>

      <p className="mt-3 text-zinc-500 text-sm">Generated images from crexo</p>
    </div>
  );
};

export default Header;
