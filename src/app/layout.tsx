"use client";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Banner />
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex">
          {open && <Sidebar />}
          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}