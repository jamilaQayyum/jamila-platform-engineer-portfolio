"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  GitBranch,
  Container,
  Code,
  BarChart3,
  DollarSign,
  Eye,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { personalInfo } from "@/data/personal";

const highlights = [
  { icon: Cloud, label: "AWS & GCP Expertise", color: "text-sky-500" },
  { icon: GitBranch, label: "CI/CD Automation", color: "text-emerald-500" },
  { icon: Container, label: "Docker & Containers", color: "text-cyan-500" },
  { icon: Code, label: "Terraform & IaC", color: "text-violet-500" },
  { icon: Shield, label: "Cloudflare WAF & Zero Trust", color: "text-rose-500" },
  { icon: Eye, label: "ELK, Prometheus & Grafana", color: "text-amber-500" },
  { icon: BarChart3, label: "Web3 & Blockchain", color: "text-fuchsia-500" },
  { icon: DollarSign, label: "AI/ML Platform Engineering", color: "text-green-500" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building reliable, scalable cloud infrastructure"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 sm:p-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {personalInfo.about}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {personalInfo.stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass-card p-5 flex flex-col items-center text-center gap-3 cursor-default"
              >
                <div className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-800 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
