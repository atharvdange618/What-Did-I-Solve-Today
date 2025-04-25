"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ContentCategories() {
  const [activeTab, setActiveTab] = useState("all");
  const categories = [
    { id: "all", label: "All Entries" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "devops", label: "DevOps" },
    { id: "algorithms", label: "Algorithms" },
  ];

  const tags = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "CSS",
    "Performance",
    "Debugging",
    "Testing",
    "Docker",
    "AWS",
  ];

  return (
    <section className="mb-12">
      <h2 className="mb-6 font-sans text-3xl font-bold">Browse by Category</h2>

      <Tabs
        defaultValue="all"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="mb-6 grid w-full grid-cols-2 gap-4 space-x-0 rounded-none border-0 bg-transparent p-0 md:flex md:flex-wrap">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className={`rounded-none border-4 border-black px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all data-[state=active]:translate-x-1 data-[state=active]:translate-y-1 data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                activeTab === category.id
                  ? "bg-[#60B5FF] text-black"
                  : "bg-white text-black hover:bg-[#AFDDFF]"
              }`}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              className="rounded-none border-2 border-black bg-white px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#AFDDFF] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            >
              {tag}
            </Button>
          ))}
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            {/* Content will be populated by the JournalEntries component */}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
