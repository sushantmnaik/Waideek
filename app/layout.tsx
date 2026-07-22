import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "Waideek",
  description: "Waideek is a Software Service provided for free for all. No signin or login required. It is a searching tool.",
  keywords:"Waideek, Waideek ai, ai, waideek, waideekgpt, Waideek GPT, Sushant Naik, Sushant, sushant naik official"
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="bg-gray-900" >{children}</body>
    </html>
  );
}
