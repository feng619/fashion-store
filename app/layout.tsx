import type { Metadata } from "next";
import { Inter } from "next/font/google";

import TopBanner from "./_components/TopBanner";
import TopBar from "./_components/TopBar";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "法菲爾服飾",
  description: "最新潮的網路服飾賣家",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-50 bg-white">
          <TopBanner />
          <TopBar />
          <NavBar />
        </div>

        <main className="flex justify-center">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
