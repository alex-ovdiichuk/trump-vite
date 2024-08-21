"use client";

import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";
import Image from "./Image";

export const Section3 = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <div className="relative" ref={ref} id="trump-farm">
      <div className="absolute inset-0">
        <Image
          src="/assets/section3-bg.png"
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <section className="container mx-auto relative z-20">
        <motion.h2
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="text-white text-[40px] xl:text-[80px] font-normal uppercase"
        >
          What is Trump Farm?
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[70%] flex flex-col flex-1 mb-6 lg:mb-0">
            <motion.p
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
              }}
              className="text-[#ffcd2a] text-xl xl:text-3xl font-extrabold font-manrope uppercase w-full lg:w-[80%]"
            >
              Trump Farm is a Telegram-based game for all crypto enthusiasts and
              Trump supporters around the world
            </motion.p>
            <motion.div
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
              }}
              className="relative h-[220px] lg:h-full"
            >
              <Image
                src="/assets/section3-img.gif"
                fill
                alt=""
                className="object-contain object-center"
              />
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.9 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateX(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateX(50%)" },
            }}
            className="relative w-[232px] h-[477px] mx-auto xl:w-[313px] xl:h-[645px]"
          >
            <Image src="/assets/section3-img.png" fill alt="" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
