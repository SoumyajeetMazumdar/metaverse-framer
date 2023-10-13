"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling -
        like it's really real. You can feel what you want to in this metaverse
        world because that is what the{" "}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{" "}
        really is today ! Using only{" "}
        <span className="font-extrabold text-white">VR devices</span>, you can
        easily explore the type of metaverse world that you want, and turn your
        dreams into a reality.
        <span className="font-extrabold text-white"> Let's explore</span> the
        madness of the metaverse by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn("down", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrowdown"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
