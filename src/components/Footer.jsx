import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950/60 backdrop-blur-md border-t border-zinc-800 px-6 sm:px-16 py-6 flex sm:flex-row items-center justify-between gap-4 text-white">
      <div className="hidden sm:flex items-center gap-2">
        <img
          src={assets.logo_icon}
          alt="logo icon"
          className="w-8 sm:w-10 lg:w-12"
        />
        <p className="text-white font-semibold text-2xl tracking-wide">crexo</p>
      </div>

      <p className="text-zinc-400 text-sm text-center sm:text-left">
        © Crexo | All rights reserved
      </p>

      <div className="flex gap-3 mt-3 sm:mt-0">
        <a
          href="https://www.facebook.com/profile.php?id=61587858477840"
          target="_blank"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
        >
          <FaFacebookF className="text-white w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/crexo.ai_26"
          target="_blank"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
        >
          <FaInstagram className="text-white w-5 h-5" />
        </a>
        <a
          href="mailto:crexo.ai@gmail.com"
          target="_blank"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
        >
          <FaEnvelope className="text-white w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
