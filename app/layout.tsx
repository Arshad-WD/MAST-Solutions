import type { Metadata } from "next";
import { Instrument_Serif, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mast Design and Automation | High-Performance Websites & Business Workflows",
  description: "A boutique studio building high-performance websites, customized CRM pipelines, marketing landing pages, and business automations. Elite execution, zero fluff.",
  keywords: [
    "Mast Design and Automation",
    "Boutique Web Development Agency",
    "Business Automations",
    "CRM integrations",
    "Landing Pages",
    "Custom Integrations",
    "Zapier Automations",
    "Tailored Workflows",
  ],
  authors: [{ name: "Mast Design and Automation" }],
  openGraph: {
    title: "Mast Design and Automation | Websites & Automations",
    description: "Boutique agency engineering premium digital products, custom CRM flows, and marketing funnels.",
    type: "website",
    locale: "en_US",
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
      className={`${instrumentSerif.variable} ${outfit.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans selection:bg-accent selection:text-paper">
        {children}
      </body>
    </html>
  );
}
