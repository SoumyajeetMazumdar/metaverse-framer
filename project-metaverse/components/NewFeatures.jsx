"use client";

import styles from "../styles";

const NewFeatures = ({ title, subtitle, imgUrl }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <img src={imgUrl} alt={title} className="w-1/3 h-1/3 object-contain" />
    </div>

    <div className="">
      <h4 className=" mt-[26px] font-bold text-[24px] text-white leading-[32px]">
        {title}
      </h4>
      <p className="flex-1 mt-[26px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
        {subtitle}
      </p>
    </div>
  </div>
);

export default NewFeatures;
