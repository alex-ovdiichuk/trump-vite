import { useWindowSize } from "@uidotdev/usehooks";
import Image from "./Image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";

const items = [
  <div key={0}>
    Contact with <span className="text-[#d12035]">Donald Trump Jr.</span> to
    gain project support
  </div>,
  <div key={1}>Listing on DEXs / CEXs</div>,
  <div key={2}>AirDrop Trump Token during the US elections</div>,
  <div key={3}>Reaching the TOP among all web apps on Telegram</div>,
  <div key={4}>Adding our unique mechanics</div>,
  <div key={5}>MVP release</div>,
];

export const Section7 = () => {
  const size = useWindowSize();
  const { ref, controls } = useSectionAnimation(0.2);

  return (
    <div className="relative" ref={ref} id="roadmap">
      <div className="absolute inset-0">
        <Image
          src="/assets/section7-bg.png"
          fill
          alt=""
          className="object-cover object-top"
        />
      </div>
      <section className="container mx-auto py-32 relative z-30">
        <motion.h2
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="text-center text-white text-[40px] xl:text-[80px] font-normal mb-6 lg:mb-[186px]"
        >
          Roadmap
        </motion.h2>
        <div className="relative">
          <ul className="flex flex-col-reverse lg:flex-col gap-6 lg:gap-2 ml-0 lg:ml-48 w-fit mb-8 lg:mb-0">
            {items.map((i, idx) => (
              <li
                key={idx}
                style={{
                  transform: `translateX(calc(${
                    size.width && size.width > 959 ? items.length - 1 - idx : 0
                  } * 15%))`,
                }}
              >
                <motion.div
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.6, delay: idx * 0.2 + 0.3 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transform: "translateX(0)",
                    },
                    hidden: {
                      opacity: 0,
                      scale: 0,
                      transform: "translateX(100%)",
                    },
                  }}
                  className="font-manrope text-white text-base xl:text-2xl font-bold lg:font-medium flex flex-row items-start gap-8 lg:gap-3 lg:flex-col"
                >
                  <div className="w-[21px] xl:w-[30px] h-[21px] min-w-[21px] xl:min-w-[30px] xl:h-[30px] bg-[#d12035] rounded-full ml-2"></div>
                  {i}
                </motion.div>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <motion.div
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateX(0)" },
                hidden: {
                  opacity: 0,
                  scale: 0,
                  transform: "translateX(-200%)",
                },
              }}
              className="w-2/5 lg:w-[242px] h-[250px] lg:h-[347px] relative lg:absolute left-0 bottom-0"
            >
              <Image
                src="/assets/section7-biden.png"
                fill
                alt=""
                className="object-contain object-center"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 1.2 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateX(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateX(200%)" },
              }}
              className="w-3/5 lg:w-[347px] h-[300px] lg:h-[242px] relative lg:absolute right-0 top-0"
            >
              <div className="lg:-translate-y-full h-full xl:-translate-x-1/2">
                <Image
                  src="/assets/section7-trump.png"
                  fill
                  alt=""
                  className="object-contain object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
