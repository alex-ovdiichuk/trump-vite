import { motion } from "framer-motion";
import { buttonVariants } from "./ui/button";
import Image from "./Image";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { cn } from "@/lib/utils";

export const Section1 = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <div
      className="pt-[148px] xl:pt-[330px] pb-6 lg:pb-[120px] xl:pb-[265px] -mt-[120px] lg:-mt-[170px] xl:-mt-[266px] relative"
      ref={ref}
    >
      <div className="absolute inset-0 z-10">
        <Image
          src="/assets/section-1-bg.png"
          fill
          sizes="100vw"
          alt="Background"
          className="object-cover object-center"
        />
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 0 }}
        variants={{
          visible: { transform: "translateX(0)" },
          hidden: { transform: "translateX(-100%)" },
        }}
        className="w-[280px] h-[280px] absolute bottom-0 -left-36 xl:left-0 z-20"
      >
        <Image
          src="/assets/fireworks-left.png"
          fill
          alt=""
          className="object-contain"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 0 }}
        variants={{
          visible: { transform: "translateX(0)" },
          hidden: { transform: "translateX(100%)" },
        }}
        className="hidden lg:block w-[220px] h-[355px] absolute bottom-24 -right-36 xl:right-0 z-20"
      >
        <Image
          src="/assets/fireworks-right.png"
          fill
          alt=""
          className="object-contain"
        />
      </motion.div>
      <section className="relative z-30 flex container mx-auto flex-col lg:flex-row">
        <div className="w-full lg:max-w-[50%] mb-4 lg:mb-0">
          <motion.h2
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateX(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateX(-50%)" },
            }}
            className="text-white text-[40px] xl:text-[80px] leading-tight lg:leading-none mb-4"
          >
            Make America Great Again!
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateX(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateX(-50%)" },
            }}
            className="hidden lg:block font-manrope text-[#ffcd2a] text-2xl font-extrabold uppercase mb-12"
          >
            Community-driven project by dedicated crypto and Trump fans built on
            the TON Ecosystem
          </motion.p>

          <motion.a
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateX(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateX(-50%)" },
            }}
            href="#join"
            className={cn(
              buttonVariants({ variant: "default", size: "none" }),
              "block w-full lg:w-fit"
            )}
          >
            <div className="w-full lg:w-fit py-8 px-[100px] xl:px-[140px] border-2 border-[#ff2f48] rounded-2xl">
              lets go!
            </div>
          </motion.a>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.2, delay: 0 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="relative"
        >
          <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[400px] xl:w-[750px] h-auto lg:h-[400px] xl:h-[800px]">
            <Image
              src="/assets/trump.webp"
              sizes="50wv"
              width={812}
              height={833}
              alt="Trump"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};
