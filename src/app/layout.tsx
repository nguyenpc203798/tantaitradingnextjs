import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Providers from "@/components/Providers";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Tan Tai Trading",
    default: "Tan Tai Trading - Professional agricultural business",
  },
  description: "Providing Professional agricultural business for companies of all sizes in Vietnam",
  keywords: ["business", "trading", "consulting", "vietnam", "ho chi minh", "professional services"],
  authors: [{ name: "Tan Tai Trading" }],
  creator: "Tan Tai Trading",
  publisher: "Tan Tai Trading",
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
  icons: {
    icon: [
      { url: '/images/logo/logo.png' },
      { url: '/images/logo/logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/logo/logo.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/images/logo/logo.png' },
      { url: '/images/logo/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: { url: '/images/logo/logo.png' },
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/logo/logo.png',
      },
      {
        rel: 'mask-icon',
        url: '/images/logo/logo.png',
        color: '#00843D',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Tan Tai Trading",
    description: "Providing Professional agricultural business for companies of all sizes in Vietnam",
    url: "https://tantaitrading.com",
    siteName: "Tan Tai Trading",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tantaitrading.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tan Tai Trading - Professional agricultural business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tan Tai Trading",
    description: "Providing Professional agricultural business for companies of all sizes in Vietnam",
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