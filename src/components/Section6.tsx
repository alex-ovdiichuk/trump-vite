import Image from "./Image";

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

const tokenomics = [
  "30% presale",
  "30% airdrop / game reward",
  "5% KOLs round",
  "15 % marketing / treasury",
  "15% liquidity cex/dex MM",
  "5% team",
];

export const Section6 = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="/assets/section6-bg.png"
          fill
          alt=""
          className="object-cover object-top"
        />
      </div>
      <section className="relative z-20 container mx-auto py-[106px] flex flex-col-reverse lg:flex-row justify-between">
        <div>
          <h2 className="hidden lg:block text-center lg:text-left text-white text-[40px] xl:text-[80px] font-normal mb-6 lg:mb-8">
            TF TOKEN
          </h2>
          <ul className="flex flex-col gap-4">
            {items.map((i) => (
              <Item i={i} key={i.text} />
            ))}
          </ul>
        </div>

        <div className="w-[343px] h-[374px] mx-auto lg:h-auto lg:w-3/5 relative mb-6 lg:mb-0">
          <Image
            src="/assets/section6-img.png"
            fill
            alt=""
            className="object-contain object-right"
          />
        </div>

        <h2 className="block lg:hidden text-center lg:text-left text-white text-[40px] xl:text-[80px] font-normal mb-6 lg:mb-8">
          TF TOKEN
        </h2>
      </section>
      <section className="relative z-20 container mx-auto flex flex-col lg:flex-row pt-0 lg:pt-10 xl:pt-[154px]">
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#d12035] text-[40px] xl:text-[80px] font-normal mb-5">
            Tokenomics
          </h2>
          <ul className="space-y-5 mb-6 lg:mb-0">
            {tokenomics.map((i) => (
              <li
                key={i}
                className="text-white text-lg lg:text-2xl font-normal"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[343px] h-[225px] lg:h-auto lg:w-1/2 mx-auto relative">
          <Image
            src="/assets/tokenomics.png"
            fill
            alt=""
            className="object-contain object-right"
          />
        </div>
      </section>
    </div>
  );
};

const Item: React.FC<{
  i: { text: string; icon: string };
}> = ({ i }) => {
  return (
    <div className="px-2 xl:px-4 py-3 xl:py-6 bg-white rounded-2xl justify-center items-center gap-4 inline-flex text-[#d12035] text-xs xl:text-lg font-normal w-full lg:w-fit">
      <Image
        src={i.icon}
        width={48}
        height={48}
        alt=""
        className="w-8 xl:w-12 h-8 xl:h-12"
      />
      {i.text}
    </div>
  );
};
