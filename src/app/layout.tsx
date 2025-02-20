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
  title: "Ariel Figueroa | Senior Front-End Engineer & React Developer",
  description: 
    "Experienced Senior Front-End Engineer specializing in React, TypeScript, and modern web development. Explore my projects, resume, and blog for insights on UI/UX, performance optimization, and scalable web applications.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollable`}
      >
        {children}
      </body>
    </html>
  );
}
