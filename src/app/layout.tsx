import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:  {
    default: 'PDF-Cogify',
    template: 'PDF at Cogify',
  },
  description: "Try all new PDF With GPT-4o services, at free and unlimited usage. No ads, no tracking.",
  metadataBase: new URL('https://pdf.cogify.social'),
  openGraph: {
    type: 'website',
    url: 'https://cogify.social',
    title: 'Cogify',
    description: "Try all new PDF With GPT-4o services, at free and unlimited usage. No ads, no tracking.",
    images: [
      {
        url: 'https://cogify.social/logo.png',
        width: 800,
        height: 600,
        alt: 'Cogify Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shubhamsharmaui',
    title: 'Cogify',
    description: "Try all new PDF With GPT-4o services, at free and unlimited usage. No ads, no tracking.",
    images: 'https://cogify.social/logo.png',
  },
  alternates: {
    canonical: 'https://cogify.social',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Providers>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="shortcut icon" href="/logo.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Try all new PDF With GPT-4o services, at free and unlimited usage. No ads, no tracking" />
          <meta name="author" content="Shubham Sharma" />

          {/* Open Graph meta tags */}
          <meta property="og:title" content="Pdf Cogify" />
          <meta property="og:description" content="Try all new PDF With GPT-4o services, at free and unlimited usage. No ads, no tracking" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pdf.cogify.social" />
          <meta property="og:image" content="https://cogify.social/logo.png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />

          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@shubhamsharmaui" />
          <meta name="twitter:title" content="PDF Cogify" />
          <meta name="twitter:description" content="Try all new PDF With GPT-4o services, at free and unlimited usage. No ads, no tracking" />
          <meta name="twitter:image" content="https://cogify.social/logo.png" />
        </head>
          <body className={inter.className}>
          {children}
          </body>
          <Toaster />
        </html>
      </Providers>
    </ClerkProvider>
  );
}
