"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} relative py-8`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto  flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="sm:text-[64px] text-[44px] text-white max-lg:mx-auto">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          id="call-to-action action"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px] max-lg:mx-auto"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24ppx] object-contain"
          />
          <span className="font-normal text-[16px] text-white uppercase">
            Enter metaverse
          </span>
        </button>
      </div>
    </div>

    <div className="flex flex-col ">
      <div className="my-[30px] h-[2px] bg-secondary-white"></div>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <h4 className="font-extrabold text-[24px] text-white">Metaversus</h4>

        <p className="font-normal text-[14px] text-white opacity-50">
          {" "}
          Copyright &copy; 2023 Metaversus. All rights reserved.
        </p>

        <div className="flex flex-row gap-3 items-center justify-between">
          {socials.map((social) => (
            <img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain opacity-90 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
