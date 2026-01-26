import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LaptopFinder AI - Find Your Perfect Laptop",
  description: "Get personalized laptop recommendations powered by AI. Answer a few simple questions and find the best laptop for your needs and budget.",
  keywords: ["laptop", "recommendation", "AI", "India", "best laptop", "laptop finder"],
  openGraph: {
    title: "LaptopFinder AI - Find Your Perfect Laptop",
    description: "Get personalized laptop recommendations powered by AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="gradient-bg" />
        {children}
      </body>
    </html>
  );
}
