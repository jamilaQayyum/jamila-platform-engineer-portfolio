"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Star,
  GitBranch,
  Flame,
  Code2,
  Boxes,
  Workflow,
  FileCode,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { githubShowcase, githubStats } from "@/data/experience";
import { personalInfo } from "@/data/personal";

const repoIcons: Record<string, ComponentType<{ className?: string }>> = {
  terraform: Boxes,
  kubernetes: Code2,
  github: Workflow,
  helm: FileCode,
  script: FileCode,
};

export default function GitHubShowcase() {
  return (
    <section id="github" className="section-padding relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="GitHub Showcase"
          subtitle="Open-source contributions and infrastructure automation repositories"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <AnimatedCounter
            value={githubStats.contributions}
            suffix="+"
            label="Contributions"
          />
          <AnimatedCounter
            value={githubStats.repositories}
            label="Repositories"
          />
          <AnimatedCounter
            value={githubStats.streak}
            suffix=" days"
            label="Streak Stats"
          />
          <div className="text-center col-span-2 lg:col-span-1">
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">
              Languages Used
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {githubStats.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 font-mono"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubShowcase.map((repo, index) => {
            const Icon = repoIcons[repo.icon] || Code2;
            return (
              <motion.a
                key={repo.title}
                href={`${personalInfo.github}/${repo.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-900 dark:bg-gray-800 group-hover:bg-devops-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-devops-400" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Star className="w-4 h-4" />
                    {repo.stars}
                  </div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-devops-500 transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  {repo.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {repo.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 font-mono">
                  <GitBranch className="w-3 h-3" />
                  {repo.repo}
                </div>
              </motion.a>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="glass-card p-6 flex flex-col items-center justify-center text-center sm:col-span-2 lg:col-span-1"
          >
            <Flame className="w-10 h-10 text-orange-500 mb-3" />
            <div className="text-3xl font-bold gradient-text">
              {githubStats.streak}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Day Contribution Streak
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm text-devops-500 hover:underline flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              View Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
