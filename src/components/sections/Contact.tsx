"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/personal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      external: false,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/-/g, "")}`,
      external: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/jamilaqayyum",
      href: personalInfo.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jamilaqayyum",
      href: personalInfo.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open to DevOps and Cloud Engineering opportunities worldwide"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-2">
                Let&apos;s build something great together
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Whether you&apos;re looking for a Senior DevOps Engineer, need help
                with cloud infrastructure, or want to discuss automation strategies —
                I&apos;d love to hear from you.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </div>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="glass-card p-4 flex items-center gap-4 hover:border-devops-500/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-devops-500/10 group-hover:bg-devops-500/20 transition-colors">
                    <link.icon className="w-5 h-5 text-devops-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{link.label}</p>
                    <p className="text-sm font-medium group-hover:text-devops-500 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-devops-500 focus:ring-2 focus:ring-devops-500/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-devops-500 focus:ring-2 focus:ring-devops-500/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-devops-500 focus:ring-2 focus:ring-devops-500/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {submitted ? (
                <div className="flex items-center gap-2 text-emerald-500 text-sm font-medium">
                  <CheckCircle className="w-5 h-5" />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              ) : (
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
