import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { metadataFlorida, metadataGlobal } from "./metadata";
import { headers } from "next/headers"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = headers(); 
  const metadataType = (await requestHeaders).get("x-metadata") || "global"; 
  return metadataType === "florida" ? metadataFlorida : metadataGlobal;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scrollable">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scrollable`}>
        {children}
      </body>
    </html>
  );
}
