"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-20 bg-gradient-to-r from-devops-500 to-cyan-500 rounded-full",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
