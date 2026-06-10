import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jamila Qayyum | DevOps Engineer & Cloud Solutions Architect",
  description:
    "DevOps Engineer and Cloud Solutions Architect with 4+ years of experience building highly available platforms on AWS and GCP. Expert in Terraform, CI/CD, ELK Stack, and security hardening.",
  keywords: [
    "DevOps Engineer",
    "Cloud Solutions Architect",
    "Platform Engineer",
    "AWS",
    "GCP",
    "Terraform",
    "CI/CD",
    "GitHub Actions",
    "ELK Stack",
    "Wazuh",
    "Web3",
    "Jamila Qayyum",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Jamila Qayyum" }],
  creator: "Jamila Qayyum",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jamila Qayyum | DevOps Engineer & Cloud Solutions Architect",
    description:
      "Building scalable, secure & automated cloud infrastructure. 4+ years across AWS, GCP, Web3, and AI/ML platforms.",
    siteName: "Jamila Qayyum Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamila Qayyum | DevOps Engineer & Cloud Solutions Architect",
    description:
      "DevOps Engineer with 4+ years building resilient AWS & GCP platforms. Terraform, CI/CD, security, and observability.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
