import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-32">
      
      <h1 className="text-4xl sm:text-7xl mt-10 max-w-4xl">
        Turn text to <span className="text-zinc-400">image</span>, in seconds.
      </h1>

      <p className="text-zinc-400 max-w-xl mt-5">
        Unleash your creativity with AI. Turn your imagination into visual art
        instantly — just type and generate.
      </p>

      <button className="mt-8 px-8 py-3 bg-white text-black rounded-full flex items-center gap-2 font-medium hover:opacity-90 cursor-pointer transition active:scale-95">
        Generate Images
        <img className="h-5" src={assets.star_group} alt="star group" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <img
              key={index}
              className="rounded-lg border border-zinc-800 hover:scale-105 transition cursor-pointer max-sm:w-10"
              src={
                index % 2 === 0
                  ? assets.sample_img_1
                  : assets.sample_img_2
              }
              alt="sample"
              width={70}
            />
          ))}
      </div>

      <p className="mt-3 text-zinc-500 text-sm">
        Generated images from crexo
      </p>
    </div>
  );
};

export default Header;
