import { personalInfo } from "@/data/personal";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-devops-500 to-cyan-500">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">{personalInfo.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                DevOps Engineer & Cloud Solutions Architect
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-devops-500/10 hover:text-devops-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-devops-500/10 hover:text-devops-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg hover:bg-devops-500/10 hover:text-devops-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {currentYear} {personalInfo.name}. Built with Next.js, Tailwind
            CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
