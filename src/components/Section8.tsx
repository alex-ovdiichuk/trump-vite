import { buttonVariants } from "./ui/button";
import { config } from "@/config";
import Image from "./Image";
import { cn } from "@/lib/utils";

export const Section8 = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="/assets/section8-bg.png"
          fill
          alt=""
          className="object-cover object-bottom"
        />
      </div>
      <section className="container mx-auto relative z-20 pt-3 pb-12">
        <h2 className="text-white text-[40px] xl:text-[80px] text-left lg:text-center font-normal mb-3">
          Join our community
        </h2>
        <p className="text-left lg:text-center text-[#ffcd2a] text-lg lg:text-3xl font-extrabold font-manrope uppercase mb-24">
          Crypto enthusiasts, Trump supporters, and an energetic and experienced
          team dedicated to creating the best crypto gaming experience
        </p>
        <div className="flex justify-between items-end flex-col lg:flex-row">
          <a
            href={config.social.x}
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "mb-6 lg:w-[25%] lg:mb-36 order-2 lg:order-1"
            )}
          >
            X/Twitter
          </a>
          <div className="w-full lg:w-1/2 h-[553px] relative order-1 lg:order-2 mb-6 lg:mb-0">
            <Image
              src="/assets/section8-img.png"
              fill
              alt=""
              className="object-contain object-bottom"
            />
          </div>
          <a
            href={config.social.x}
            className={cn(
              buttonVariants({ variant: "blue", size: "default" }),
              "mb-6 lg:mb-36 order-3 lg:w-[25%]"
            )}
          >
            Telegram
          </a>
        </div>
      </section>
    </div>
  );
};
