"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ title, subtitle, imgUrl, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt={title}
      className="w-full md:w-[270px] h-[250px] rounded-[32px] object-cover "
    />

    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-16 flex flex-col max-w-[650px]">
        <h4 className="font-normal text-white lg:text-[42px] text-[26px]">
          {title}
        </h4>
        <p className="mt-4 font-normal lg:text-[20px]text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="hidden lg:flex items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-solid border-white ">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-2/5 h-2/5 object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
