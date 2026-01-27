import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Replace with your actual domain
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pickmylaptop.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LaptopFinder AI - Find Your Perfect Laptop (India)",
    template: "%s | LaptopFinder AI",
  },
  description: "Stop confused searching! Our AI analyzes your needs to recommend the top 3 best laptops for students, professionals, and gamers in India.",
  keywords: ["laptop finder", "best laptop india", "AI laptop recommendation", "student laptop", "gaming laptop", "laptop buying guide", "best laptop under 50000"],
  authors: [{ name: "LaptopFinder AI" }],
  creator: "LaptopFinder AI",
  publisher: "LaptopFinder AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "LaptopFinder AI - Find Best Laptops in Seconds",
    description: "Don't waste days watching reviews. Get 3 personalized laptop recommendations instantly based on your budget and needs.",
    url: SITE_URL,
    siteName: "LaptopFinder AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png", // We'll need to ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "LaptopFinder AI Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaptopFinder AI - Find Best Laptops in Seconds",
    description: "Get 3 personalized laptop recommendations instantly based on your budget and needs.",
    images: ["/og-image.png"], // Same here
  },
  verification: {
    google: "process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION", // Placeholder for actual code
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
