import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next.js 14 Portfolio v1 Homepage",
    template: "%s | Nextjs 14"
  },
  description: "Nextjs portfolio v1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="main_container flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </main >
        </body>
    </html>
  );
}
