"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const placeholderPosts = [
  {
    title: "Terraform Best Practices for Multi-Cloud",
    excerpt:
      "Lessons learned from managing infrastructure across AWS and GCP with reusable modules.",
    date: "Coming Soon",
    readTime: "8 min read",
    tag: "Infrastructure",
  },
  {
    title: "GitOps with Kubernetes and Helm",
    excerpt:
      "A practical guide to implementing GitOps workflows for production Kubernetes clusters.",
    date: "Coming Soon",
    readTime: "10 min read",
    tag: "Kubernetes",
  },
  {
    title: "Cloud Cost Optimization Strategies",
    excerpt:
      "How to reduce cloud spending without compromising performance or reliability.",
    date: "Coming Soon",
    readTime: "6 min read",
    tag: "Cloud",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Blog"
          subtitle="Technical articles on DevOps, cloud infrastructure, and automation"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col opacity-75"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-devops-500" />
                <span className="text-xs px-2 py-1 rounded-full bg-devops-500/10 text-devops-600 dark:text-devops-400 font-medium">
                  {post.tag}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <button
                disabled
                className="mt-4 flex items-center gap-1 text-sm text-gray-400 cursor-not-allowed"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          Blog posts coming soon. Stay tuned for DevOps insights and tutorials.
        </motion.p>
      </div>
    </section>
  );
}
