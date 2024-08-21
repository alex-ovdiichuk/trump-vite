import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import Image from "./Image";
import { AnimationControls, motion } from "framer-motion";
import { Section6Second } from "./Section6Second";

const items = [
  {
    text: "Increase farming efficiency",
    icon: "/assets/section6icons/icon1.svg",
  },
  {
    text: "Stake Trump Tower for rewards",
    icon: "/assets/section6icons/icon2.svg",
  },
  {
    text: "Participate in AirDrops and win TON",
    icon: "/assets/section6icons/icon3.svg",
  },
  {
    text: "Vote on future project developments",
    icon: "/assets/section6icons/icon4.svg",
  },
  {
    text: "Purchase unique items and accessories",
    icon: "/assets/section6icons/icon5.svg",
  },
];

export const Section6 = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <div className="relative" id="tf-token">
      <div className="absolute inset-0">
        <Image
          src="/assets/section6-bg.png"
          fill
          alt=""
          className="object-cover object-top"
        />
      </div>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: [0, 2, 2, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          times: [0, 0.8, 0.99, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] absolute top-48 lg:top-0 right-0 origin-right"
      >
        <Image
          src="/assets/salut-right.png"
          fill
          alt=""
          className="object-contain object-right"
        />
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: [0, 0.5, 1, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          times: [0, 0.8, 0.99, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] absolute bottom-0 top-48 lg:top-auto lg:bottom-1/3 left-0 origin-left"
      >
        <Image
          src="/assets/salut-left.png"
          fill
          alt=""
          className="object-contain object-left"
        />
      </motion.div>
      <section
        className="relative z-20 container mx-auto py-[106px] flex flex-col-reverse lg:flex-row justify-between"
        ref={ref}
      >
        <div>
          <motion.h2
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0 }}
            variants={{
              visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
              hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
            }}
            className="hidden lg:block text-center lg:text-left text-white text-[40px] xl:text-[80px] font-normal mb-6 lg:mb-8"
          >
            TF TOKEN
          </motion.h2>
          <ul className="flex flex-col gap-4">
            {items.map((i, idx) => (
              <Item i={i} key={i.text} controls={controls} idx={idx} />
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
          className="w-[343px] h-[374px] mx-auto lg:h-auto lg:w-3/5 relative mb-6 lg:mb-0"
        >
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
              times: [0, 1],
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="absolute top-20 -left-8 lg:top-5 lg:left-4 xl:top-24 xl:left-14 z-10"
          >
            <Image
              src="/assets/glare.png"
              alt=""
              className="w-32 h-32 lg:w-auto lg:h-auto"
            />
          </motion.div>
          <Image
            src="/assets/section6-img.png"
            fill
            alt=""
            className="object-contain object-right"
          />
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="block lg:hidden text-center lg:text-left text-white text-[40px] xl:text-[80px] font-normal mb-6 lg:mb-8"
        >
          TF TOKEN
        </motion.h2>
      </section>
      <Section6Second />
    </div>
  );
};

const Item: React.FC<{
  i: { text: string; icon: string };
  controls: AnimationControls;
  idx: number;
}> = ({ i, controls, idx }) => {
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay: idx * 0.2 + 0.6 }}
      variants={{
        visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
        hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
      }}
      className="px-3 xl:px-4 py-3 xl:py-6 bg-white rounded-2xl justify-start lg:justify-center items-center gap-4 inline-flex text-[#d12035] text-xs xl:text-lg font-normal w-full lg:w-fit uppercase"
    >
      <Image
        src={i.icon}
        width={48}
        height={48}
        alt=""
        className="w-8 xl:w-12 h-8 xl:h-12"
      />
      {i.text}
    </motion.div>
  );
};
