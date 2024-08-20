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

export const Section9 = () => {
  const [openIndexes, setOpenIndexes] = useState<string[]>([]); // Индексы открытых вкладок

  const handleToggle = (index: string) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // Закрыть вкладку
    } else {
      setOpenIndexes([...openIndexes, index]); // Открыть вкладку
    }
  };

  const openAll = () => {
    setOpenIndexes(["item-1", "item-2", "item-3"]); // Например, если у вас 3 вкладки, откроем все
  };

  return (
    <div className="relative">
      <div className="absolute w-full h-[100vw] lg:h-[50vw]">
        <Image
          src="/assets/section9-bg.png"
          fill
          alt=""
          className="object-contain object-bottom"
        />
      </div>
      <section className="container mx-auto pb-[200px] relative z-20">
        <h2 className="text-white text-[40px] xl:text-[80px] font-normal mb-9">
          FAQ
        </h2>
        <Accordion
          type="multiple"
          value={openIndexes}
          className="w-full flex flex-col gap-5 mb-12"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger onClick={() => handleToggle("item-1")}>
              What is Trump Coin?
            </AccordionTrigger>
            <AccordionContent>
              It's easy! Join our Telegram, launch the game directly within
              Telegram, and start earning USDTr.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger onClick={() => handleToggle("item-2")}>
              How can I start playing Trump Coin?
            </AccordionTrigger>
            <AccordionContent>
              It's easy! Join our Telegram, launch the game directly within
              Telegram, and start earning USDTr.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger onClick={() => handleToggle("item-3")}>
              What are USDTr tokens?
            </AccordionTrigger>
            <AccordionContent>
              It's easy! Join our Telegram, launch the game directly within
              Telegram, and start earning USDTr.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-center">
          <Button
            variant="blue"
            className="w-full lg:w-fit px-8 mx-auto"
            onClick={openAll}
          >
            read all questions
          </Button>
        </div>
      </section>
    </div>
  );
};
