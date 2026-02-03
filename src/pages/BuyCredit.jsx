import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="min-h-screen text-white px-6 pt-24 pb-16">
      <div className="text-center mb-14">
        <button
          className="px-5 py-2 text-sm rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-zinc-300"
        >
          Our Plans
        </button>

        <h1 className="mt-6 text-3xl sm:text-4xl font-semibold">
          Choose the perfect plan
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base mt-3">
          Buy credits and start generating stunning AI images
        </p>
      </div>

      <div
        className="
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 max-w-6xl mx-auto
      "
      >
        {plans.map((item, index) => (
          <div
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
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
