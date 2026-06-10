"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/data/experience";

const providerColors: Record<string, string> = {
  "Amazon Web Services": "from-orange-500 to-amber-600",
  "Google Cloud": "from-blue-500 to-cyan-600",
  CNCF: "from-indigo-500 to-violet-600",
  HashiCorp: "from-violet-500 to-purple-600",
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Industry-recognized credentials in cloud and DevOps technologies"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 relative overflow-hidden group"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  providerColors[cert.provider] ?? "from-gray-500 to-gray-600"
                }`}
              />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${
                    providerColors[cert.provider] ?? "from-gray-500 to-gray-600"
                  }`}
                >
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{cert.title}</h3>
                  <p className="text-xs text-gray-500">{cert.provider}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {cert.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-devops-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium">
                  Coming Soon
                </span>
                <button className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-devops-500/10 transition-all">
                  <ExternalLink className="w-4 h-4 text-devops-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
