import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EnWretched - Graphic Desgin & FullStack",
  description: "Portfolio and blog of Ray Wretch, a digital artist and And Aspiring Web Developer exploring Fullstack and experimental art.",
  icons: {
    icon: [
      {
        url: '/public/images/showcase/deamon.png',
        sizes: 'any',
      },
      {
        url: '/public/images/showcase/deamon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/public/images/showcase/deamon.pngg',
      sizes: '180x180',
    },
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
