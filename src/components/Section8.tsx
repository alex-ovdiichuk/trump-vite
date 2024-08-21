import { buttonVariants } from "./ui/button";
import { config } from "@/config";
import Image from "./Image";
import { cn } from "@/lib/utils";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";

export const Section8 = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <div className="relative" ref={ref} id="join">
      <motion.div
        initial={{
          transform: "translate(0, 0)",
        }}
        animate={{
          transform: [
            "translate(32px, 24px)",
            "translate(-32px, -24px)",
            "translate(32px, -24px)",
            "translate(-32px, 24px)",
            "translate(0, 0)",
          ],
        }}
        transition={{
          duration: 4,
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        className="absolute -inset-8"
      >
        <Image
          src="/assets/section8-bg.png"
          fill
          alt=""
          className="object-cover object-bottom"
        />
      </motion.div>
      <section className="container mx-auto relative z-20 pt-3 pb-12">
        <motion.h2
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="text-white text-[40px] xl:text-[80px] text-left lg:text-center font-normal mb-3 uppercase"
        >
          Join our community
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="text-left lg:text-center text-[#ffcd2a] text-lg lg:text-3xl font-extrabold font-manrope uppercase mb-24"
        >
          Crypto enthusiasts, Trump supporters, and an energetic and experienced
          team dedicated to creating the best crypto gaming experience
        </motion.p>
        <div className="flex justify-between items-end flex-col lg:flex-row">
          <motion.a
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.9 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateX(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateX(-100%)" },
            }}
            href={config.social.x}
            className={cn(
              buttonVariants({ variant: "default", size: "none" }),
              "mb-6 w-full lg:w-[25%] lg:mb-36 order-2 lg:order-1"
            )}
          >
            <div className="w-full py-8 lg:py-4 xl:py-8 border-2 border-[#ff2f48] rounded-2xl">
              X/Twitter
            </div>
          </motion.a>
          <motion.div
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
            }}
            className="w-full lg:w-2/5 h-[553px] xl:h-[700px] relative order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <Image
              src="/assets/section8-img.png"
              fill
              alt=""
              className="object-contain object-bottom"
            />
          </motion.div>
          <motion.a
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.9 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateX(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateX(100%)" },
            }}
            href={config.social.telegram}
            className={cn(
              buttonVariants({ variant: "blue", size: "none" }),
              "mb-6 w-full lg:mb-36 order-3 lg:w-[25%]"
            )}
          >
            <div className="w-full py-8 lg:py-4 xl:py-8 border-2 border-[#007aff] rounded-2xl">
              Telegram
            </div>
          </motion.a>
        </div>
      </section>
    </div>
  );
};
