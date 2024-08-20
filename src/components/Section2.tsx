"use client";

import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";
import Image from "./Image";

export const Section2 = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <div className="pt-[62px] pb-16 lg:pb-[200px] relative" ref={ref}>
      <div className="absolute inset-0">
        <Image
          src="/assets/section2-bg.png"
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <section className="container mx-auto relative z-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full xl:w-[800px] lg:w-[60%] mb-16 lg:mb-0">
          <motion.h2
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.4, delay: 0 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
            }}
            className="text-white text-[40px] xl:text-[80px] uppercase"
          >
            About Us
          </motion.h2>
          <div className="font-manrope text-base xl:text-lg">
            <motion.div
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.4, delay: 0.2 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
              }}
            >
              <span className="text-white font-bold">
                One evening, we were watching the{" "}
              </span>
              <span className="text-[#ffcd2a] font-bold">
                Bitcoin 2024 conference.
                <br />
              </span>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.4, delay: 0.4 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
              }}
            >
              <span className="text-white font-normal">
                <br />
                Future President{" "}
              </span>
              <span className="text-[#ffcd2a] font-bold">Trump</span>
              <span className="text-white font-normal"> said, </span>
              <span className="text-[#ffcd2a] font-bold">
                &quot;I count on the support of Bitcoiners. If we don&apos;t
                win, we lose the country.&quot;
                <br />
              </span>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.4, delay: 0.6 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
              }}
            >
              <span className="text-white font-normal">
                <br />
                After hearing those words, we couldn&apos;t just sit and do
                nothing. We understood that only together can we spark a bullish
                market and achieve mass adoption.{" "}
              </span>
              <span className="text-[#ffcd2a] font-normal underline">
                That&apos;s how the idea for our project was born!
                <br />
              </span>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.4, delay: 0.8 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
              }}
            >
              <span className="text-white font-normal">
                <br />
                This project is not just a game and fun—it&apos;s a message from
                crypto enthusiasts to crypto enthusiasts, from the community for
                the community.
                <br />
                <br />
                We are crypto enthusiasts, Trump supporters, and an energetic
                and experienced team dedicated to creating the best crypto
                gaming experience.
                <br />
                <br />
              </span>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.4, delay: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
              }}
            >
              <span className="text-[#ffcd2a] font-bold">
                Let&apos;s make the crypto world better together!
                <br />
              </span>
            </motion.div>
          </div>
        </div>
        <div className="relative w-[80vw] lg:w-[330px] xl:w-[460px] h-[80vw] lg:h-[330px] xl:h-[460px] rotate-[10deg] grid grid-cols-2 gap-6 bg-white p-6">
          <motion.div
            animate={{
              rotate: ["0deg", "5deg", "-5deg", "0deg"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="w-full h-full relative"
          >
            <Image src="/assets/cards/card1.png" fill alt="" />
          </motion.div>
          <motion.div
            animate={{
              rotate: ["0deg", "1deg", "8deg", "-4deg", "0deg"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="w-full h-full relative"
          >
            <Image src="/assets/cards/card2.png" fill alt="" />
          </motion.div>
          <motion.div
            animate={{
              rotate: ["0deg", "2deg", "7deg", "-4deg", "0deg"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="w-full h-full relative"
          >
            <Image src="/assets/cards/card3.png" fill alt="" />
          </motion.div>
          <motion.div
            animate={{
              rotate: ["0deg", "-5deg", "6deg", "0deg"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="w-full h-full relative"
          >
            <Image src="/assets/cards/card4.png" fill alt="" />
          </motion.div>
          {/* <Image src="/assets/section2-img.png" fill alt="" /> */}
        </div>
      </section>
    </div>
  );
};
