import React from "react";
import Dashboard from "@/components/layout/Dashboard";

export default function Home() {

    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div><Dashboard /></div>
        </main>
    );
}
