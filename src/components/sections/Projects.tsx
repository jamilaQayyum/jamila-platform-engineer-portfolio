"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Modal from "@/components/ui/Modal";
import { projects, projectFilters, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  infrastructure: "from-violet-500 to-purple-600",
  gcp: "from-blue-500 to-indigo-600",
  security: "from-rose-500 to-red-600",
  cicd: "from-emerald-500 to-green-600",
  web3: "from-fuchsia-500 to-purple-600",
  ai: "from-cyan-500 to-teal-600",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Infrastructure and automation projects that deliver measurable impact"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-devops-500 to-cyan-500 text-white shadow-lg shadow-devops-500/25"
                  : "glass hover:bg-devops-500/10"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 flex flex-col cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className={cn(
                    "h-2 w-16 rounded-full bg-gradient-to-r mb-4",
                    categoryColors[project.category]
                  )}
                />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-devops-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-1 text-sm font-medium text-devops-500 group-hover:gap-2 transition-all">
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ""}
      >
        {selectedProject && (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {selectedProject.description}
            </p>
            <div>
              <h4 className="font-semibold mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <ChevronRight className="w-4 h-4 text-devops-500 mt-0.5 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-devops-500/10 text-devops-600 dark:text-devops-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-sm text-devops-500 hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}
