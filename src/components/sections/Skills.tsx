"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Code,
  Container,
  GitBranch,
  Monitor,
  Terminal,
  GitMerge,
  Shield,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  cloud: Cloud,
  code: Code,
  container: Container,
  pipeline: GitBranch,
  monitor: Monitor,
  terminal: Terminal,
  git: GitMerge,
  shield: Shield,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Tools and technologies I use to build and maintain cloud infrastructure"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Cloud;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 group cursor-default"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-devops-500/10 hover:text-devops-600 dark:hover:text-devops-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
