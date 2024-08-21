import { cn } from "@/lib/utils";
import Image from "./Image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { AnimationControls, motion } from "framer-motion";

const items = [
  {
    text: "Unique gameplay with thrilling quests",
    icon: "/assets/section5icons/icon1.svg",
  },
  {
    text: "Telegram app integration",
    icon: "/assets/section5icons/icon2.svg",
  },
  {
    text: "User-friendly design",
    icon: "/assets/section5icons/icon3.svg",
  },
  {
    text: "Giveaways, contests, and airdrops",
    icon: "/assets/section5icons/icon4.svg",
  },
  {
    text: "Referral program for organic growth",
    icon: "/assets/section5icons/icon5.svg",
  },
  {
    text: "NFT items and weapons",
    icon: "/assets/section5icons/icon6.svg",
  },
  {
    text: "In-game connection with TON",
    icon: "/assets/section5icons/icon7.svg",
  },
  {
    text: "Auto-farming clothing and boosts",
    icon: "/assets/section5icons/icon8.svg",
  },
];

export const Section5 = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <div className="relative" ref={ref}>
      <div className="absolute inset-0">
        <Image
          src="/assets/section5-bg.png"
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>
      <section className="container mx-auto relative z-30">
        <h2 className="text-center text-white text-[40px] xl:text-[80px] font-normal mb-6 lg:mb-20 uppercase">
          Main features
        </h2>
        <div className="hidden lg:block absolute inset-20 translate-y-20 -translate-x-8">
          <Image
            src="/assets/section5-img.png"
            fill
            alt=""
            className="object-contain object-center"
          />
        </div>
        <div className="lg:hidden w-[300px] h-[320px] mx-auto relative mb-6">
          <Image
            src="/assets/section5-img-mobile.png"
            fill
            alt=""
            className="object-contain object-center"
          />
        </div>
        <div className="flex flex-col gap-2.5 lg:gap-5">
          <div className="mx-auto w-full lg:w-fit">
            <Item i={items[0]} controls={controls} order={0} />
          </div>
          <div className="flex justify-between flex-col lg:flex-row gap-2.5">
            <Item
              i={items[1]}
              controls={controls}
              order={1}
              className="lg:ml-14"
            />
            <Item
              i={items[2]}
              controls={controls}
              order={2}
              className="lg:mr-20"
            />
          </div>
          <div className="flex justify-between flex-col lg:flex-row gap-2.5">
            <Item i={items[3]} controls={controls} order={3} />
            <Item i={items[4]} controls={controls} order={4} />
          </div>
          <div className="flex justify-between flex-col lg:flex-row gap-2.5">
            <Item
              i={items[5]}
              controls={controls}
              order={5}
              className="lg:ml-14"
            />
            <Item
              i={items[6]}
              controls={controls}
              order={6}
              className="lg:mr-20 xl:mr-28"
            />
          </div>
          <div className="mx-auto w-full lg:w-fit">
            <Item i={items[7]} controls={controls} order={7} />
          </div>
        </div>
      </section>
    </div>
  );
};

const Item: React.FC<{
  i: { text: string; icon: string };
  className?: string;
  controls: AnimationControls;
  order: number;
}> = ({ i, className, controls, order }) => {
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay: order * 0.2 }}
      variants={{
        visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
        hidden: { opacity: 0, scale: 0, transform: "translateY(100%)" },
      }}
      className={cn(
        "px-3 xl:px-4 py-3 xl:py-6 bg-white rounded-2xl justify-start lg:justify-center  items-center gap-4 inline-flex text-[#d12035] text-xs xl:text-lg font-normal w-full lg:w-auto uppercase",
        className
      )}
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
