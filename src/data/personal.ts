const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const personalInfo = {
  name: "Jamila Qayyum",
  title: "DevOps Engineer | Cloud Solutions Architect | Platform Engineer",
  location: "Lahore, Pakistan — Open to Relocate",
  experience: "4+ Years",
  email: "jamilaqayumch@gmail.com",
  phone: "034-774-04494",
  github: "https://github.com/jamilaqayyum",
  linkedin: "https://linkedin.com/in/jamilaqayyum",
  resume: `${basePath}/Jamila-Platform-Devops.pdf`,
  headline: "Building Scalable, Secure & Automated Cloud Infrastructure",
  subheadline:
    "DevOps Engineer and Cloud Solutions Architect with 4+ years of experience building highly available, resilient platforms on AWS and GCP — streamlining CI/CD, hardening security, and delivering measurable impact across Web3, AI/ML, and microservices.",
  about: `DevOps Engineer and Cloud Solutions Architect with 4+ years of hands-on experience building highly available, resilient platforms on AWS and GCP. I have a proven record of streamlining CI/CD pipelines with GitHub Actions, Jenkins, and Terraform to cut delivery timelines by 60% and reduce environment provisioning time by 50%.

I'm proficient in containerization with Docker, system observability using the ELK Stack, Prometheus, and Grafana, and security hardening through IAM, Cloudflare WAF, and Zero Trust policies. My portfolio spans Web3, AI and ML, blockchain, and microservices platforms — from architecting GCP environments at BigImmersive to building reproducible AWS infrastructure with Terraform at Byteforge.

I thrive on automation, proactive incident response, and building platforms that help engineering teams ship faster with confidence.`,
  stats: [
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Delivery Time Cut", value: 60, suffix: "%" },
    { label: "Uptime SLA", value: 99.9, suffix: "%" },
    { label: "Provisioning Time Saved", value: 50, suffix: "%" },
  ],
};
