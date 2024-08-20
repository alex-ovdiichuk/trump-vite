import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import Image from "./Image";
import { motion } from "framer-motion";

const tokenomics = [
  "30% presale",
  "30% airdrop / game reward",
  "5% KOLs round",
  "15 % marketing / treasury",
  "15% liquidity cex/dex MM",
  "5% team",
];

export const Section6Second = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <section
      className="relative z-20 container mx-auto flex flex-col lg:flex-row pt-0 lg:pt-10 xl:pt-[154px]"
      ref={ref}
    >
      <div className="w-full lg:w-1/2">
        <motion.h2
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="text-[#d12035] text-[40px] xl:text-[80px] font-normal mb-5"
        >
          Tokenomics
        </motion.h2>
        <ul className="space-y-5 mb-6 lg:mb-0">
          {tokenomics.map((i, idx) => (
            <motion.li
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: idx * 0.2 + 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
              }}
              key={i}
              className="text-white text-lg lg:text-2xl font-normal"
            >
              {i}
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 1.2 }}
        variants={{
          visible: { opacity: 1, scale: 1, transform: "translateX(0)" },
          hidden: { opacity: 0, scale: 0, transform: "translateX(50%)" },
        }}
        className="w-[343px] h-[225px] lg:h-auto lg:w-1/2 mx-auto relative"
      >
        <Image
          src="/assets/tokenomics.png"
          fill
          alt=""
          className="object-contain object-right"
        />
      </motion.div>
    </section>
  );
};
