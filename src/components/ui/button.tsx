import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-white text-2xl uppercase text-center rounded-xl shadow shadow-inner border-b-4 border-[#9a1d2c]",
  {
    variants: {
      variant: {
        default: "pink-gradient",
        blue: "blue-gradient border-[#164578]",
      },
      size: {
        default: "w-full py-8",
        sm: "h-9 rounded-md px-3",
        lg: "w-full lg:w-fit py-8 px-[100px] xl:px-[140px]",
        none: "",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
