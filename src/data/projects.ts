export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "infrastructure" | "gcp" | "security" | "cicd" | "web3" | "ai";
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "vanarchain",
    title: "Vanarchain — Blockchain Infrastructure",
    description:
      "Deployed production blockchain nodes on GCP with regional traffic routing, automated DNS failover, and hardened IAM and WAF policies for high-availability decentralized operations.",
    technologies: ["GCP", "Terraform", "Cloudflare WAF", "IAM"],
    category: "web3",
    highlights: [
      "Production blockchain nodes on GCP",
      "Regional traffic routing with automated DNS failover",
      "Hardened IAM and WAF policies",
      "High-availability decentralized operations",
    ],
  },
  {
    id: "virtua-nitroleague",
    title: "Virtua & NitroLeague — Web3 Platforms",
    description:
      "Architected scalable Google Cloud environments and delivery pipelines for two live Web3 platforms, achieving zero-downtime releases with full observability coverage.",
    technologies: ["GCP", "GitHub Actions", "Cloud Run", "Prometheus", "Grafana"],
    category: "web3",
    highlights: [
      "Scalable GCP environments for two live Web3 platforms",
      "Zero-downtime release pipelines",
      "Full observability coverage across services",
      "Automated delivery with integrated testing gates",
    ],
  },
  {
    id: "inflectiv",
    title: "Inflectiv — AI Platform Infrastructure",
    description:
      "Designed cloud-native AI infrastructure on GCP by containerizing Python-based ML workloads and wiring LLM APIs into the delivery pipeline, cutting feature iteration cycles by 40%.",
    technologies: ["GCP", "Docker", "Vertex AI", "Gemini API", "Python"],
    category: "ai",
    highlights: [
      "Cloud-native AI infrastructure on GCP",
      "Containerized Python ML workloads",
      "Gemini and Vertex AI API integration",
      "40% reduction in feature iteration cycles",
    ],
  },
  {
    id: "tapnode",
    title: "Tapnode — Game Backend",
    description:
      "Delivered a high-performance multiplayer backend with GitFlow-driven rollouts and a full Prometheus and Grafana stack for real-time performance visibility.",
    technologies: ["GitHub Actions", "Prometheus", "Grafana", "Docker", "GCP"],
    category: "cicd",
    highlights: [
      "High-performance multiplayer backend deployment",
      "GitFlow-driven release rollouts",
      "Prometheus and Grafana real-time monitoring",
      "Performance visibility across game services",
    ],
  },
  {
    id: "terraform-aws",
    title: "Multi-Environment Terraform on AWS",
    description:
      "Built reusable Terraform component library covering VPC, ECS, RDS, S3, IAM, and ALB with remote state management — reducing environment provisioning time by 50%.",
    technologies: ["Terraform", "AWS", "GitHub Actions"],
    category: "infrastructure",
    highlights: [
      "Reusable Terraform modules for VPC, ECS, RDS, S3, IAM, ALB",
      "100% reproducible rollouts across dev, staging, and production",
      "50% reduction in environment provisioning time",
      "Blue-green deployment strategies with security scanning",
    ],
  },
  {
    id: "security-monitoring",
    title: "Centralized Security Monitoring",
    description:
      "Deployed ELK Stack and Wazuh for centralized log aggregation, enterprise-level threat detection, and compliance-ready audit trails across production services.",
    technologies: ["ELK Stack", "Wazuh", "GCP", "Cloudflare"],
    category: "security",
    highlights: [
      "Live log aggregation across 6+ production services",
      "Enterprise-level threat detection with Wazuh",
      "Compliance-ready audit trails",
      "35% reduction in overall attack surface",
    ],
  },
];

export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "gcp", label: "GCP" },
  { id: "web3", label: "Web3" },
  { id: "ai", label: "AI/ML" },
  { id: "security", label: "Security" },
  { id: "cicd", label: "CI/CD" },
];
