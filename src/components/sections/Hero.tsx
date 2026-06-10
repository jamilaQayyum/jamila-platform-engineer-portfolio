"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  FolderOpen,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Terminal from "@/components/ui/Terminal";
import { personalInfo } from "@/data/personal";

const terminalCommands = [
  "kubectl get pods --all-namespaces",
  "terraform plan -out=production.tfplan",
  "docker build -t app:latest .",
  "gh workflow run deploy.yml",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--background))]" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-devops-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="gradient-text">
                {personalInfo.name.split(" ")[1]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl text-devops-600 dark:text-devops-400 font-medium"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-3 flex items-center gap-2 text-gray-500 dark:text-gray-400"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{personalInfo.location}</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-sm">{personalInfo.experience} Experience</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 text-2xl sm:text-3xl font-bold text-balance"
            >
              {personalInfo.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              {personalInfo.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#projects">
                <Button>
                  <FolderOpen className="w-4 h-4" />
                  View Projects
                </Button>
              </a>
              <a
                href={personalInfo.resume}
                download="Jamila-Qayyum-Resume.pdf"
              >
                <Button variant="secondary">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <Terminal commands={terminalCommands} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {[
                { label: "AWS", color: "from-orange-500 to-amber-500" },
                { label: "GCP", color: "from-blue-500 to-cyan-500" },
                { label: "K8s", color: "from-indigo-500 to-violet-500" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-4 text-center hover:scale-105 transition-transform"
                >
                  <div
                    className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
