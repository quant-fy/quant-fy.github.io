import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Font configurations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quant-fy.github.io'),
  title: {
    default: "Quantfy | Automated Quantitative Investment Made Easy For You",
    template: "%s | Quantfy"
  },
  description: "Quantfy website, automated quantitative investment made easy for you",
  keywords: [
    "quantitative", 
    "investment", 
    "trading", 
    "automation", 
    "React", 
    "Next.js"
  ],
  authors: [{ name: "Leandro Alves" }],
  creator: "Leandro Alves",
  publisher: "Leandro Alves",
  openGraph: {
    title: "Quant-fy - Automated Quant Investment",
    description: "Quantfy, automated quantitative investment made easy for you",
    url: 'https://quant-fy.github.io',
    siteName: "Quant-fy",
    images: [
      {
        url: '/logo.jpeg',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
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
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body 
        className={`
          antialiased 
          bg-gradient-to-br 
          from-gray-100 
          to-gray-200 
          min-h-screen 
          text-gray-900
        `}
      >
        {/* Main content */}
        {children}
        
        {/* Vercel Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}