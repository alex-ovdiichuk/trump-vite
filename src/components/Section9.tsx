"use client";

import { useState } from "react";
import Image from "./Image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { motion } from "framer-motion";

const items = [
  {
    q: "What is Trump Coin?",
    a: "Trump Coin is a game on Telegram built on the TON blockchain, where you can earn $USDTr and later exchange them for TrumpFarm tokens ($TF). The game is themed around the U.S. presidential elections.",
  },
  {
    q: "How can I start playing Trump Coin?",
    a: "It's easy! Just join our Telegram, start the game directly within the app, and begin earning $USDTr.",
  },
  {
    q: "What are USDTr tokens?",
    a: "$USDTr are used to purchase upgrades and items in the game. They are the backbone of the in-game economy and can be earned through gameplay activities. After the game ends, you'll be able to exchange them for $TF.",
  },
  {
    q: "How can I earn USDTr tokens?",
    a: "You can earn $USDTr tokens by participating in gameplay, completing tasks, leveling up, and achieving goals in the game.",
  },
  {
    q: "How to use USDTr tokens in the game?",
    a: "$USDTr tokens can be used to buy upgrades, auto-farming outfits, special items, and other bonuses that will help you progress in the game.",
  },
];

export const Section9 = () => {
  const { ref, controls } = useSectionAnimation(0.2);

  const [openIndexes, setOpenIndexes] = useState<string[]>([]); // Индексы открытых вкладок

  const handleToggle = (index: string) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // Закрыть вкладку
    } else {
      setOpenIndexes([...openIndexes, index]); // Открыть вкладку
    }
  };

  const openAll = () => {
    setOpenIndexes([...items.map((i) => i.q)]); // Например, если у вас 3 вкладки, откроем все
  };

  return (
    <div className="relative" ref={ref}>
      <div className="absolute w-full h-[100vw] lg:h-[50vw]">
        <Image
          src="/assets/section9-bg.png"
          fill
          alt=""
          className="object-contain object-bottom"
        />
      </div>
      <section className="container mx-auto pb-[200px] relative z-20">
        <motion.h2
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="text-white text-[40px] xl:text-[80px] font-normal mb-9"
        >
          FAQ
        </motion.h2>
        <Accordion
          type="multiple"
          value={openIndexes}
          className="w-full flex flex-col gap-5 mb-12"
        >
          {items.map((i, idx) => (
            <motion.div
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: idx * 0.3 + 0.6 }}
              variants={{
                visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
                hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
              }}
            >
              <AccordionItem value={i.q}>
                <AccordionTrigger onClick={() => handleToggle(i.q)}>
                  {i.q}
                </AccordionTrigger>
                <AccordionContent>{i.a}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        <motion.div
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 1.2 }}
          variants={{
            visible: { opacity: 1, scale: 1, transform: "translateY(0)" },
            hidden: { opacity: 0, scale: 0, transform: "translateY(50%)" },
          }}
          className="flex justify-center"
        >
          <Button
            variant="blue"
            className="w-full lg:w-fit px-8 mx-auto"
            onClick={openAll}
            size="none"
          >
            <div className="w-full py-8 lg:py-4 xl:py-8 border-2 border-[#007aff] rounded-2xl">
              read all questions
            </div>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};
