import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import WhatsAppWidget from "./components/WhatsAppWidget";
import HeroNavbar from "./components/HeroNavbar";
import RouteLoadingOverlay from "./components/RouteLoadingOverlay";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://albirrschools.com"),
  title: {
    default: "ALBiRR Schools",
    template: "%s | ALBiRR Schools",
  },
  description:
    "Empowering the next generation with balanced education and strong Islamic values.",
  applicationName: "ALBiRR Schools",
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "ALBiRR Schools",
    description:
      "Empowering the next generation with balanced education and strong Islamic values.",
    url: "https://albirrschools.com",
    siteName: "ALBiRR Schools",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "ALBiRR Schools Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALBiRR Schools",
    description:
      "Empowering the next generation with balanced education and strong Islamic values.",
    images: ["/icon.png"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.png?v=3" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/icon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png?v=3" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScrollProvider>
          <RouteLoadingOverlay minDurationMs={500} />
          <HeroNavbar />
          {children}
        </SmoothScrollProvider>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
