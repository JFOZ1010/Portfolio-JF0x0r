import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan Felipe Oz",
  description:
    "Software developer and security researcher from Colombia. CVE author, NASA-acknowledged researcher, KPMG Ethical Hacker. Focused on web application penetration testing and vulnerability research.",
  keywords: [
    "penetration testing",
    "security researcher",
    "CVE",
    "bug bounty",
    "ethical hacker",
    "Colombia",
    "web security",
  ],
  authors: [{ name: "Juan Felipe Osorio" }],
  openGraph: {
    title: "Juan Felipe Oz — Security Researcher",
    description: "CVE author and NASA-acknowledged independent researcher.",
    url: "https://jf0x0r.com",
    siteName: "Juan Felipe Oz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Juan Felipe Oz — Security Researcher",
    description: "CVE author and NASA-acknowledged independent researcher.",
    creator: "@PwnedRar_",
  },
  icons: { icon: "/logo-mine.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
