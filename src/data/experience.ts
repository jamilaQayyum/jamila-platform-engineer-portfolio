export interface JobExperience {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
}

export const workExperience: JobExperience[] = [
  {
    company: "Byteforge",
    title: "DevOps Engineer",
    period: "January 2026 — Present",
    location: "Lahore, Pakistan",
    highlights: [
      "Built and managed AWS workloads using Terraform IaC for 100% reproducible, version-controlled rollouts across dev, staging, and production.",
      "Designed a reusable Terraform component library covering VPC, ECS, RDS, S3, IAM, and ALB — reducing environment provisioning time by 50%.",
      "Engineered GitHub Actions delivery pipelines with linting, security scanning, and blue-green deployments for near-zero-downtime releases.",
      "Configured keyword-based log alerting that reduced mean time to detection (MTTD) by 40% and enabled proactive incident resolution.",
      "Built structured log pipelines and live alert dashboards that shortened mean time to recovery (MTTR) across production services.",
    ],
  },
  {
    company: "BigImmersive",
    title: "DevOps Engineer",
    period: "April 2022 — January 2026",
    location: "Lahore, Pakistan",
    highlights: [
      "Architected containerized microservices on GCP with Cloud Run, Cloud Functions, and regional Load Balancers — maintaining 99.9% uptime across 6+ production services.",
      "Established CI/CD workflows using GitHub Actions, GCP Cloud Build, and Jenkins, trimming the average release cycle from 3 days to under 4 hours.",
      "Deployed a centralized log monitoring platform using ELK Stack and Wazuh with live aggregation, threat detection, and compliance-ready audit trails.",
      "Hardened security through least-privilege IAM, Cloudflare WAF rules, and Zero Trust access controls — reducing attack surface by 35%.",
      "Automated Nginx reverse proxy provisioning, SSL/TLS via Certbot, and Cloudflare DNS routing for 10+ domains.",
      "Integrated Gemini and Vertex AI APIs with Dockerized Python workloads on GCP, reducing AI feature release time by 40% per sprint.",
    ],
  },
];

export const education = {
  degree: "M.Sc. Computer Science",
  institution: "University of Agriculture, Faisalabad",
  period: "2017 — 2019",
  detail: "CGPA: 3.47 / 4.0",
};

export const careerAchievements = [
  "Cut delivery timelines by 60% through CI/CD automation",
  "Reduced environment provisioning time by 50% with Terraform modules",
  "Maintained 99.9% uptime SLA across 6+ production services",
  "Reduced mean time to detection by 40% with proactive log alerting",
  "Hardened security posture reducing attack surface by 35%",
];

export const githubShowcase = [
  {
    title: "Terraform Modules",
    description: "Reusable IaC modules for AWS & GCP",
    icon: "terraform",
    repo: "terraform-modules",
    stars: 24,
  },
  {
    title: "Kubernetes Manifests",
    description: "Production-ready K8s configurations",
    icon: "kubernetes",
    repo: "k8s-manifests",
    stars: 18,
  },
  {
    title: "GitHub Actions Workflows",
    description: "CI/CD pipeline templates",
    icon: "github",
    repo: "ci-cd-workflows",
    stars: 32,
  },
  {
    title: "Helm Charts",
    description: "Application deployment charts",
    icon: "helm",
    repo: "helm-charts",
    stars: 15,
  },
  {
    title: "DevOps Scripts",
    description: "Automation & utility scripts",
    icon: "script",
    repo: "devops-scripts",
    stars: 21,
  },
];

export const githubStats = {
  contributions: 1247,
  repositories: 42,
  languages: ["Python", "HCL", "YAML", "Bash", "JavaScript"],
  streak: 47,
};

export const certifications = [
  {
    title: "AWS Certifications",
    provider: "Amazon Web Services",
    items: ["AWS Solutions Architect", "AWS DevOps Engineer"],
    status: "placeholder",
  },
  {
    title: "Google Cloud Certifications",
    provider: "Google Cloud",
    items: ["GCP Professional Cloud Architect", "GCP DevOps Engineer"],
    status: "placeholder",
  },
  {
    title: "Kubernetes Certifications",
    provider: "CNCF",
    items: ["CKA", "CKAD"],
    status: "placeholder",
  },
  {
    title: "Terraform Certifications",
    provider: "HashiCorp",
    items: ["Terraform Associate"],
    status: "placeholder",
  },
];
