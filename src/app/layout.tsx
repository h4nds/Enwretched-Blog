import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import PerformanceOptimizer from "@/components/seo/PerformanceOptimizer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { THEME_IDS } from "@/constants/themes";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/constants/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EnWretched - Graphic Design & FullStack",
    template: "%s | EnWretched"
  },
  description: DEFAULT_DESCRIPTION,
  keywords: ["graphic design", "web development", "digital art", "portfolio", "fullstack", "experimental art"],
  authors: [{ name: "Ray Wretch" }],
  creator: "Ray Wretch",
  publisher: "Ray Wretch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'EnWretched - Graphic Design & FullStack',
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'EnWretched',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnWretched - Graphic Design & FullStack',
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
    creator: '@enwretched',
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
        url: 'favicon.ico',
        sizes: 'any',
      },
      {
        url: '/images/showcase/deamon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/images/showcase/deamon.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    apple: {
      url: '/images/showcase/deamon.png',
      sizes: '180x180',
    },
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'ASAfoFhRa8qHg0iWY0UoNwp1Y3B0pyprPXLh8t_ALNU',
  },
  other: {
    'Content-Security-Policy': `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
      connect-src 'self';
    `.replace(/\s+/g, ' ').trim()
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var a=${JSON.stringify([...THEME_IDS])};var k="enwretched_theme";var t=localStorage.getItem(k)||"enwretched";if(a.indexOf(t)<0)t="enwretched";document.documentElement.setAttribute("data-theme",t);})();`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/showcase/deamon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/showcase/deamon.png" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cinzel.variable} ${cormorant.variable} antialiased pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]`}
      >
        <ThemeProvider>
          <PerformanceOptimizer
            preloadImages={['/images/showcase/deamon.png']}
            enableAnalytics={true}
          >
            {children}
          </PerformanceOptimizer>
        </ThemeProvider>
      </body>
    </html>
  );
}
