import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Layla Oud | Social Media, Events & Management",
  description:
    "Portfolio of Layla Oud — Social Media Manager, Event Planner and Management Professional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${editorial.variable}`}>
        {children}
      </body>
    </html>
  );
}
