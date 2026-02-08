import { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } =
    useContext(AppContext);

  const navigate = useNavigate();

  const initializePayment = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,

      amount: order.amount,
      currency: order.currency,

      name: "Credits payment",
      description: "Credits payment",

      order_id: order.id,

      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            { headers: { token } },
          );

          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credits added");
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  const paymentRazorpay = async (planId) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { userId: user.id, planId, },
        { headers: { token } },
      );

      if (data.success) {
        initializePayment(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.12 } },
  };

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    swipeToSlide: true,
  };

  const PlanCard = ({ item }) => (
    <motion.div
      variants={fade}
      className="
        bg-white/10 backdrop-blur-md border border-white/20
        rounded-2xl p-8 mx-2
        transition duration-300
        flex flex-col text-white h-76

      "
    >
      <img src={assets.logo_icon} alt="logo" className="w-8 mb-5" />

      <p className="font-semibold text-lg">{item.id}</p>

      <p className="text-zinc-400 text-sm mt-2 flex-grow">{item.desc}</p>

      <p className="mt-6">
        <span className="text-3xl font-semibold">${item.price}</span>
        <span className="text-zinc-400 text-sm ml-2">
          / {item.credits} credits
        </span>
      </p>

      <button
        onClick={() => paymentRazorpay(item.id)}
        className="
          mt-6 px-5 py-2 text-sm
          bg-white text-black rounded-full font-medium
          hover:opacity-90 active:scale-95 transition cursor-pointer
        "
      >
        {user ? "Purchase" : "Get started"}
      </button>
    </motion.div>
  );

  return (
    <div className="min-h-screen text-white px-6 pt-24 pb-16">
      <motion.div
        initial="hidden"
        animate="show"
        className="text-center mb-14 mt-16"
      >
        <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl">
          <span className="text-zinc-300">Choose</span> the perfect{" "}
          <span className="text-zinc-300">plan</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-zinc-400 text-sm sm:text-base mt-4"
        >
          Buy credits and start generating stunning AI images
        </motion.p>
      </motion.div>

      <div className="sm:hidden max-w-sm mx-auto ">
        <Slider {...sliderSettings}>
          {plans.map((item, index) => (
            <PlanCard key={index} item={item} />
          ))}
        </Slider>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="
          hidden sm:grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          max-w-6xl mx-auto
        "
      >
        {plans.map((item, index) => (
          <PlanCard key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default BuyCredit;
