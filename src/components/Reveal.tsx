// src/components/Reveal.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { reveal } from "../lib/motion";

type Props = React.PropsWithChildren<{
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  variant?: typeof reveal;
}>;

export default function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
  variant = reveal,
}: Props) {
  // Pick the right motion element (motion.div, motion.section, etc.)
  const Comp: any = (motion as any)[as] ?? motion.div;
  const reduce = useReducedMotion();

  return (
    <Comp
      className={className}
      variants={variant}
      initial="initial"
      whileInView="enter"
      viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.15 }}
      transition={{ delay: reduce ? 0 : delay }}
    >
      {children}
    </Comp>
  );
}
