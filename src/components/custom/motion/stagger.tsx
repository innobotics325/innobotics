"use client";

import { motion } from "framer-motion";

export function Stagger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
