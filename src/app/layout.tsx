import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EnWretched - Graphic Design & FullStack",
  description: "Portfolio and blog of Ray Wretch, a digital artist and And Aspiring Web Developer exploring Fullstack and experimental art.",
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
