"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Trophy, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  workExperience,
  education,
  careerAchievements,
} from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey in cloud infrastructure and DevOps engineering"
        />

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-devops-500 via-cyan-500 to-emerald-500 hidden sm:block" />

          <div className="space-y-8">
            {workExperience.map((job, jobIndex) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: jobIndex * 0.1 }}
                className="glass-card p-6 sm:p-8 sm:ml-12 relative"
              >
                <div className="absolute -left-3 sm:-left-[3.25rem] top-8 w-6 h-6 rounded-full bg-gradient-to-br from-devops-500 to-cyan-500 border-4 border-[hsl(var(--background))] hidden sm:block" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-devops-500 to-cyan-500 sm:hidden">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {job.title}
                    </h3>
                    <p className="text-devops-500 font-medium mt-1">
                      {job.company} · {job.period}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.highlights.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 sm:ml-12 relative"
            >
              <div className="absolute -left-3 sm:-left-[3.25rem] top-8 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-4 border-[hsl(var(--background))] hidden sm:block" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 sm:hidden">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{education.degree}</h3>
                  <p className="text-devops-500 font-medium mt-1">
                    {education.institution}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {education.period} · {education.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 glass-card p-6 sm:p-8 sm:ml-12"
          >
            <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
              <Trophy className="w-5 h-5 text-amber-500" />
              Career Highlights
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {careerAchievements.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <Trophy className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
