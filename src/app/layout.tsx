import "../styles/globals.css";

import { type Metadata } from "next";
import { Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "xavier's site!",
  description: "xavier's site", 
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
