import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollbarTracker } from "@/components/scrollbar-tracker";
import { MouseSpotlight } from "@/components/mouse-spotlight";
import { SmoothScrollProvider } from "@/components/smooth-scroll";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ambar Tiwari | Software & Systems Engineer",
  description:
    "Portfolio of Ambar Tiwari - Software & Systems Engineer specializing in scalable backends, distributed systems, Terraform, AWS, Docker, and high-throughput pipelines.",
  keywords: [
    "Ambar Tiwari",
    "Software Engineer",
    "Backend Developer",
    "Distributed Systems",
    "Terraform",
    "AWS",
    "Docker",
    "NestJS",
    "Python",
    "Java",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#07080e] text-zinc-100 font-sans antialiased overflow-x-hidden selection:bg-cyan-500/25 selection:text-white">
        <SmoothScrollProvider />
        <ScrollbarTracker />
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}
