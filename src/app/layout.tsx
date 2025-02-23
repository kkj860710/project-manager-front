import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import RecoilProvider from "@/provider/RecoilProvider";
import React from "react";

export const metadata: Metadata = {
  title: "Project Manager App",
  description: "Project Manager App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilProvider>
            <NavBar />
                {children}
            <Footer />
        </RecoilProvider>
      </body>
    </html>
  );
}
