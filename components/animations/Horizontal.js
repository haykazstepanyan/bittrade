"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const animationVariants = {
  initial: {
    opacity: 0,
    x: -1000,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      duration: 0.8,
      delay: 0.1,
    },
  },
};

export default function Horizontal(props) {
  const { children, hiddenProps, visibleProps, className } = props;
  const ref = useRef();

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className={className} ref={ref}>
      <motion.div
        variants={{
          hidden: hiddenProps,
          visible: visibleProps,
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          ease: "linear",
          duration: 0.35,
          delay: 0.05,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
