import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "EnWretched - Graphic Design & FullStack",
    template: "%s | EnWretched"
  },
  description: "Portfolio and blog of Ray Wretch, a digital artist and aspiring web developer exploring fullstack development and experimental art.",
  keywords: ["graphic design", "web development", "digital art", "portfolio", "fullstack", "experimental art"],
  authors: [{ name: "Ray Wretch" }],
  creator: "Ray Wretch",
  publisher: "Ray Wretch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://enwretched.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enwretched.com',
    title: 'EnWretched - Graphic Design & FullStack',
    description: 'Portfolio and blog of Ray Wretch, a digital artist and aspiring web developer exploring fullstack development and experimental art.',
    siteName: 'EnWretched',
    images: [
      {
        url: '/images/showcase/deamon.png',
        width: 1200,
        height: 630,
        alt: 'EnWretched',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnWretched - Graphic Design & FullStack',
    description: 'Portfolio and blog of Ray Wretch, a digital artist and aspiring web developer exploring fullstack development and experimental art.',
    images: ['/images/showcase/deamon.png'],
    creator: '@enwretched', // Replace with your Twitter handle
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
  icons: {
    icon: [
      {
        url: '/images/showcase/deamon.png',
        sizes: 'any',
      },
      {
        url: '/images/showcase/deamon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/images/showcase/deamon.png',
      sizes: '180x180',
    },
    shortcut: '/images/showcase/deamon.png',
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
