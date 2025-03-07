import type {Metadata} from "next";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import RecoilProvider from "@/provider/RecoilProvider";
import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Project Manager App",
  description: "Project Manager App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const currentUser = await getServerSession(authOptions);

    console.log("currentUser: {}", currentUser);
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
