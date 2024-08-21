import Image from "./Image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { config } from "../config";
import { useEffect, useState } from "react";

const items = [
  {
    title: "About us",
    href: "#about-us",
  },
  {
    title: "Trump farm",
    href: "#trump-farm",
  },
  {
    title: "Tf token",
    href: "#tf-token",
  },
  {
    title: "Roadmap",
    href: "#roadmap",
  },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => enableScroll();
  }, [open]);

  return (
    <header className="container mx-auto flex justify-between items-center py-4 lg:py-10 xl:py-[75px] relative z-40">
      <div className="flex items-center text-white text-xl xl:text-2xl">
        <div className="w-[117px] xl:w-[151px] h-[88px] xl:h-[113px] relative mr-6 xl:mr-10">
          <Image src="/assets/logo.png" fill alt="Logo" />
        </div>
        <nav className="gap-3 xl:gap-6 hidden lg:flex">
          {items.map((i) => (
            <a href={i.href} key={i.title} className="text-white">
              {i.title}
            </a>
          ))}
        </nav>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mb-4">
          <a
            href={config.social.tiktok}
            className="w-[42px] h-[47px] xl:w-[64px] xl:h-[72px] relative block"
          >
            <Image src="/assets/social/tiktok.svg" fill alt="Tik Tok" />
          </a>
          <a
            href={config.social.x}
            className="w-[42px] h-[47px] xl:w-[64px] xl:h-[72px] relative block"
          >
            <Image src="/assets/social/x.svg" fill alt="X" />
          </a>
          <a
            href={config.social.telegram}
            className="w-[42px] h-[47px] xl:w-[64px] xl:h-[72px] relative block"
          >
            <Image src="/assets/social/tg.svg" fill alt="Telegram" />
          </a>
        </div>
        <div className="text-white text-base xl:text-xl">
          Join our community
        </div>
      </div>
      <button
        className="lg:hidden w-11 h-11 relative"
        onClick={() => setOpen((prev) => !prev)}
      >
        <GiHamburgerMenu
          className={`text-white w-11 h-9 absolute left-0 top-1 transition-all duration-500 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <IoCloseSharp
          className={`text-white w-11 h-11 absolute left-0 top-0 opacity-0 transition-all duration-500 ${
            !open ? "opacity-0" : "opacity-100"
          }`}
        />
      </button>

      <div
        className={`h-[calc(100vh-120px)] w-full top-[120px] left-0 fixed z-[1000] max-h-0 opacity-0 transition-all duration-500 overflow-hidden ${
          open ? "max-h-[calc(100vh-120px)] opacity-100" : ""
        }`}
      >
        <div
          className="absolute w-full h-full top-0 left-0 bg-black/50"
          onClick={() => setOpen(false)}
        ></div>
        <div className={`w-full bg-[#21222d] relative z-10`}>
          <div className="px-4 py-12 flex justify-between">
            <div className="flex flex-col justify-between">
              <div className="w-[117px] h-[88px] relative">
                <Image src="/assets/logo.png" fill alt="Logo" />
              </div>
              <div className="flex gap-5">
                <a
                  href={config.social.tiktok}
                  className="w-[42px] h-[47px] xl:w-[64px] xl:h-[72px] relative block"
                >
                  <Image src="/assets/social/tiktok.svg" fill alt="Tik Tok" />
                </a>
                <a
                  href={config.social.x}
                  className="w-[42px] h-[47px] xl:w-[64px] xl:h-[72px] relative block"
                >
                  <Image src="/assets/social/x.svg" fill alt="X" />
                </a>
                <a
                  href={config.social.telegram}
                  className="w-[42px] h-[47px] xl:w-[64px] xl:h-[72px] relative block"
                >
                  <Image src="/assets/social/tg.svg" fill alt="Telegram" />
                </a>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-6">
              {items.map((i) => (
                <a
                  href={i.href}
                  key={i.title}
                  className="text-white text-2xl font-normal w-fit"
                  onClick={() => setOpen(false)}
                >
                  {i.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
