import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useSectionAnimation = (amount?: number) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return { ref, controls };
};
