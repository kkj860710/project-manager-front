import type {Metadata} from "next";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "./api/auth/auth-options";

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
             <NavBar
                 currentUser={currentUser}
             />
                 {children}
             <Footer/>
        </body>
        </html>
    );
}
