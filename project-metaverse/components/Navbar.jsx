"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`py-8 relative ${styles.xPaddings}`}
  >
    <div className="absolute w-1/2 inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="h-[24px] w-[24px] object-contain "
      />
      <h2 className="uppercase font-extrabold text-[24px] leading-[30px] text-white">
        Metaversus
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="h-[24px] w-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
