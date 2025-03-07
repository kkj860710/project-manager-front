'use client'

import React from "react";
import KanbanBoard from "@/components/KanbanBoard";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div><KanbanBoard /></div>
      </main>
  );
}
