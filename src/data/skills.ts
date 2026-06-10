export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    icon: "cloud",
    color: "from-sky-500 to-blue-600",
    skills: [
      "AWS (EC2, ECS, S3, RDS, Lambda, IAM, ALB, VPC)",
      "GCP (Cloud Run, Cloud Build, Cloud Functions, AlloyDB, Firebase)",
    ],
  },
  {
    title: "Infrastructure as Code",
    icon: "code",
    color: "from-violet-500 to-purple-600",
    skills: ["Terraform", "Ansible", "AWS CodePipeline"],
  },
  {
    title: "Containers & Orchestration",
    icon: "container",
    color: "from-cyan-500 to-teal-600",
    skills: ["Docker", "Docker Compose", "Kubernetes"],
  },
  {
    title: "CI/CD",
    icon: "pipeline",
    color: "from-emerald-500 to-green-600",
    skills: [
      "GitHub Actions",
      "Jenkins",
      "GitLab CI/CD",
      "GCP Cloud Build",
    ],
  },
  {
    title: "Monitoring & Logging",
    icon: "monitor",
    color: "from-amber-500 to-orange-600",
    skills: [
      "ELK Stack",
      "Prometheus",
      "Grafana",
      "Wazuh",
      "Datadog",
    ],
  },
  {
    title: "Security",
    icon: "shield",
    color: "from-rose-500 to-red-600",
    skills: [
      "IAM",
      "Cloudflare WAF",
      "Zero Trust",
      "SIEM (Wazuh)",
      "SSL/TLS",
      "CIS Benchmarks",
    ],
  },
  {
    title: "Programming & Scripting",
    icon: "terminal",
    color: "from-rose-500 to-pink-600",
    skills: ["Bash", "Python", "Linux (Ubuntu, Debian, RHEL)"],
  },
  {
    title: "Databases & Domains",
    icon: "git",
    color: "from-indigo-500 to-blue-600",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Web3 & Blockchain",
      "AI/ML",
      "Microservices",
    ],
  },
];
