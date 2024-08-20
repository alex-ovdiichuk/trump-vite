import { buttonVariants } from "./ui/button";
import { config } from "@/config";
import Image from "./Image";
import { cn } from "@/lib/utils";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";

export const Section8 = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <div className="relative" ref={ref}>
      <div className="absolute inset-0">
        <Image
          src="/assets/section8-bg.png"
          fill
          alt=""
          className="object-cover object-bottom"
        />
      </div>
      <section className="container mx-auto relative z-20 pt-3 pb-12">
        <motion.h2
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="text-white text-[40px] xl:text-[80px] text-left lg:text-center font-normal mb-3"
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
              buttonVariants({ variant: "default", size: "default" }),
              "mb-6 lg:w-[25%] lg:mb-36 order-2 lg:order-1"
            )}
          >
            X/Twitter
          </motion.a>
          <motion.div
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
            }}
            className="w-full lg:w-1/2 h-[553px] xl:h-[700px] relative order-1 lg:order-2 mb-6 lg:mb-0"
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
            href={config.social.x}
            className={cn(
              buttonVariants({ variant: "blue", size: "default" }),
              "mb-6 lg:mb-36 order-3 lg:w-[25%]"
            )}
          >
            Telegram
          </motion.a>
        </div>
      </section>
    </div>
  );
};
