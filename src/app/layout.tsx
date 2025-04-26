import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Providers from "@/components/Providers";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Tantai Trading",
    default: "Tantai Trading - Professional Business Solutions",
  },
  description: "Providing professional business solutions for companies of all sizes in Vietnam",
  keywords: ["business", "trading", "consulting", "vietnam", "ho chi minh", "professional services"],
  authors: [{ name: "Tantai Trading" }],
  creator: "Tantai Trading",
  publisher: "Tantai Trading",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tantaitrading.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "vi-VN": "/vi-VN",
    },
  },
  openGraph: {
    title: "Tantai Trading - Professional Business Solutions",
    description: "Providing professional business solutions for companies of all sizes in Vietnam",
    url: "https://tantaitrading.com",
    siteName: "Tantai Trading",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tantaitrading.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tantai Trading - Professional Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tantai Trading - Professional Business Solutions",
    description: "Providing professional business solutions for companies of all sizes in Vietnam",
    images: ["https://tantaitrading.com/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
} 