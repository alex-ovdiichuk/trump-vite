import Image from "./Image";
import { GiHamburgerMenu } from "react-icons/gi";
import { config } from "../config";

export const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-4 lg:py-10 xl:py-[75px] relative z-30">
      <div className="flex items-center text-white text-xl xl:text-2xl">
        <div className="w-[117px] xl:w-[151px] h-[88px] xl:h-[113px] relative mr-6 xl:mr-10">
          <Image src="/assets/logo.png" fill alt="Logo" />
        </div>
        <nav className="gap-3 xl:gap-6 hidden lg:flex">
          <a href="#" className="text-white">
            About us
          </a>
          <a href="#">Trump farm</a>
          <a href="#">Tf token</a>
          <a href="#">Roadmap</a>
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
      <button className="lg:hidden">
        <GiHamburgerMenu className="text-white w-11 h-9" />
      </button>
    </header>
  );
};
