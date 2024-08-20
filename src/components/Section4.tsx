"use client";

import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "./Image";

export const Section4 = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <div className="relative pt-9 lg:pt-0" ref={ref}>
      <div className="absolute inset-0">
        <Image
          src="/assets/section4-bg.png"
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <section className="container mx-auto pb-[100px] relative z-30">
        <motion.h2
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="text-white text-[40px] xl:text-[80px] text-center lg:text-left font-normal mb-6 lg:mb-20"
        >
          Our goals
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="flex flex-col lg:flex-row justify-between mb-10 xl:mb-[77px] gap-4 lg:gap-0"
        >
          <Card
            idx={0}
            img="/assets/card1.png"
            text="Help President Trump win the election"
            rotation={["0deg", "5deg", "-5deg", "0deg"]}
          />
          <Card
            idx={1}
            img="/assets/card2.png"
            text="Create a bullish market"
            rotation={["0deg", "2deg", "7deg", "-4deg", "0deg"]}
          />
          <Card
            idx={2}
            img="/assets/card3.png"
            text="Accelerate mass adoption of crypto"
            rotation={["0deg", "-5deg", "6deg", "0deg"]}
          />
        </motion.div>
        <motion.p
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="text-center text-[#ffcd2a] text-xl lg:text-4xl font-extrabold font-manrope tracking-wide"
        >
          We&apos;ll improve the quality of life for everyone in the Web3 space!
        </motion.p>
      </section>
      <div className="hidden lg:block w-full h-20 absolute top-14 xl:top-32">
        <Image
          src="/assets/rope.svg"
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

const Card: React.FC<{
  img: string;
  idx: number;
  text: string;
  rotation: string[];
}> = ({ img, idx, text, rotation }) => {
  return (
    <div className="lg:-mt-4 flex flex-col items-center">
      <motion.div
        animate={{
          rotate: rotation,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className={cn(
          "h-[330px] w-[300px] relative origin-top",
          idx === 0 || idx === 2 ? "lg:-translate-y-4" : ""
        )}
      >
        <Image src={img} fill alt="" className="object-contain object-center" />
      </motion.div>
      <div className="text-white text-base xl:text-2xl font-medium font-manrope mt-9">
        {text}
      </div>
    </div>
  );
};
