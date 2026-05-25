import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { profile, seoDescription, seoKeywords, siteUrl } from "./site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: `${profile.name} Portfolio`,
  title: {
    default:
      "Hakimuddin Haweliwala | Senior Frontend Engineer for AI Products",
    template: `%s | ${profile.name}`,
  },
  description: seoDescription,
  keywords: seoKeywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title:
      "Hakimuddin Haweliwala | Senior Frontend Engineer for AI Products",
    description: seoDescription,
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    images: [
      {
        url: "/projects/handof-figma-linear.webp",
        width: 1920,
        height: 1080,
        alt: `${profile.name} frontend engineering portfolio`,
      },
      {
        url: profile.image,
        width: 480,
        height: 480,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hakimuddin Haweliwala | Senior Frontend Engineer for AI Products",
    description: seoDescription,
    images: ["/projects/handof-figma-linear.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
