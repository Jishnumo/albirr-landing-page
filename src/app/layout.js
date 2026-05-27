import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import WhatsAppWidget from "./components/WhatsAppWidget";
import HeroNavbar from "./components/HeroNavbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AL-BIRR Schools",
  description: "Empowering the next generation with balanced education and strong Islamic values.",
  openGraph: {
    title: "AL-BIRR Schools",
    description: "Empowering the next generation with balanced education and strong Islamic values.",
    url: "https://albirrschools.com", // Replace with your actual domain when deployed
    siteName: "AL-BIRR Schools",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "AL-BIRR Schools Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
          <HeroNavbar />
          {children}
        </SmoothScrollProvider>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
