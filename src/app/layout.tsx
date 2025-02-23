import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import RecoilProvider from "@/provider/RecoilProvider";
import React from "react";
import getCurrentUser from "@/actions/getCurrentUser";

export const metadata: Metadata = {
  title: "Project Manager App",
  description: "Project Manager App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <RecoilProvider>
            <NavBar
                currentUser={currentUser}
            />
                {children}
            <Footer />
        </RecoilProvider>
      </body>
    </html>
  );
}
