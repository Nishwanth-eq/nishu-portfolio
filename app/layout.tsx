import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bonagiri Sai Nishwanth — Cloud & DevOps Engineer",
  description:
    "Cloud and DevOps engineering portfolio focused on AWS, Azure, delivery automation, containers, and production reliability.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Bonagiri Sai Nishwanth — Cloud & DevOps Engineer",
    description: "AWS, Azure, Terraform, CI/CD, containers, Better Stack observability, and production reliability.",
    type: "website",
    images: ["/images/devops-infrastructure-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
