import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job10 — AI-Powered Talent & Job Matching Platform",
  description:
    "Job10 connects top companies with high-performing professionals worldwide through precision AI job matching, verified credentials, and direct interview scheduling.",
  keywords: [
    "AI job matching",
    "recruitment platform",
    "tech talent",
    "hiring platform",
    "direct interviews",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
