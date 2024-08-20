import { Header } from "./Header";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { Section9 } from "./Section9";

export const Main = () => {
  return (
    <div className="overflow-hidden max-w-[100vw]">
      <Header />

      <div className="w-full relative -translate-y-[266px] z-0">
        <div className="w-[1587px] h-[1255px] bg-[#ed082b] rounded-full blur-[1158px] z-0 absolute top-0 right-0 -translate-y-3/4 translate-x-1/2" />
      </div>

      <Section1 />

      <div className="w-full relative z-10">
        <div className="w-[1020px] h-[806px] lg:w-[1587px] lg:h-[1255px] bg-[#007aff] rounded-full blur-[1158px] absolute bottom-0 right-[50vw] lg:right-auto lg:left-0 lg:-translate-x-1/2 translate-y-1/2 z-20"></div>
      </div>

      <Section2 />

      <Section3 />

      <div className="w-full relative z-0">
        <div className="absolute top-0 right-0 w-[1947px] h-[1540px] bg-[#d12035]/75 rounded-full blur-[1421px] translate-x-3/4 -translate-y-1/2"></div>
      </div>

      <Section4 />

      <div className="w-full relative z-0">
        <div className="w-[1020px] h-[806px] lg:w-[1587px] lg:h-[1255px] bg-[#007aff] rounded-full blur-[1158px] absolute bottom-0 right-[50vw] lg:right-auto lg:left-0 lg:-translate-x-1/2 translate-y-1/2 z-20"></div>
      </div>

      <Section5 />

      <div className="w-full relative z-0">
        <div className="absolute top-0 right-0 w-[1947px] h-[1540px] bg-[#d12035]/75 rounded-full blur-[1421px] translate-x-3/4 -translate-y-1/2"></div>
      </div>

      <Section6 />

      <div className="w-full relative z-0">
        <div className="w-[1020px] h-[806px] lg:w-[1587px] lg:h-[1255px] bg-[#007aff] rounded-full blur-[1158px] absolute bottom-0 right-[50vw] lg:right-auto lg:left-0 lg:-translate-x-1/2 translate-y-1/2 z-20"></div>
      </div>

      <Section7 />

      <div className="w-full relative z-0">
        <div className="absolute top-0 right-0 w-[1947px] h-[1540px] bg-[#d12035]/75 rounded-full blur-[1421px] translate-x-3/4 -translate-y-1/2"></div>
      </div>

      <Section8 />

      <div className="w-full relative z-0">
        <div className="w-[1020px] h-[806px] lg:w-[1587px] lg:h-[1255px] bg-[#007aff] rounded-full blur-[1158px] absolute bottom-0 right-[50vw] lg:right-auto lg:left-0 lg:-translate-x-1/2 translate-y-1/2 z-20"></div>
      </div>

      <Section9 />
    </div>
  );
};
