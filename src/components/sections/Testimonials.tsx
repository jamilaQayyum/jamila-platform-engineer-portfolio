"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const placeholders = [
  {
    quote:
      "Jamila transformed our deployment pipeline, reducing release cycles from days to hours. Her expertise in Kubernetes and CI/CD is exceptional.",
    author: "Engineering Manager",
    company: "Tech Company",
  },
  {
    quote:
      "Outstanding work on our multi-cloud infrastructure. The Terraform modules she built are now used across all our engineering teams.",
    author: "CTO",
    company: "SaaS Startup",
  },
  {
    quote:
      "Her security monitoring implementation gave us complete visibility into our cloud environment. Highly recommend for any DevOps role.",
    author: "Security Lead",
    company: "Enterprise",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Testimonials"
          subtitle="What colleagues and collaborators say about working together"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 relative opacity-60"
            >
              <Quote className="w-8 h-8 text-devops-500/30 absolute top-4 right-4" />
              <p className="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.author}</p>
                  <p className="text-xs text-gray-500">{item.company}</p>
                </div>
              </div>
              <span className="absolute bottom-4 right-4 text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                Placeholder
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
