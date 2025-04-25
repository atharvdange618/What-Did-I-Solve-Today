import { Code, Database, Server } from "@deemlol/next-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sample data for journal entries
const journalEntries = [
  {
    id: 1,
    title: "Optimizing React Renders with useMemo and useCallback",
    date: "April 24, 2024",
    preview:
      "Today I tackled a performance issue in a React application where unnecessary re-renders were causing sluggish UI...",
    tags: ["React", "Performance", "JavaScript"],
    icon: <Code className="h-full w-full" />,
    iconBg: "#AFDDFF",
  },
  {
    id: 2,
    title: "Debugging a Race Condition in Node.js",
    date: "April 23, 2024",
    preview:
      "I spent hours tracking down an intermittent bug in our Node.js API that only appeared under high load...",
    tags: ["Node.js", "Debugging", "Backend"],
    icon: <Server className="h-full w-full" />,
    iconBg: "#FFECDB",
  },
  {
    id: 3,
    title: "Optimizing Database Queries with Proper Indexing",
    date: "April 22, 2024",
    preview:
      "Today I solved a performance bottleneck by analyzing and optimizing our database queries with proper indexing...",
    tags: ["SQL", "Database", "Performance"],
    icon: <Database className="h-full w-full" />,
    iconBg: "#E0FFF1",
  },
  {
    id: 4,
    title: "Building a Custom React Hook for Form Validation",
    date: "April 21, 2024",
    preview:
      "I created a reusable custom hook to handle complex form validation logic across our React application...",
    tags: ["React", "TypeScript", "Forms"],
    icon: <Code className="h-full w-full" />,
    iconBg: "#AFDDFF",
  },
  {
    id: 5,
    title: "Implementing a Caching Strategy for API Requests",
    date: "April 20, 2024",
    preview:
      "To improve performance and reduce unnecessary network requests, I implemented a smart caching strategy...",
    tags: ["Performance", "JavaScript", "API"],
    icon: <Server className="h-full w-full" />,
    iconBg: "#FFECDB",
  },
  {
    id: 6,
    title: "Debugging Memory Leaks in a React Application",
    date: "April 19, 2024",
    preview:
      "I tracked down and fixed several memory leaks in our React application that were causing performance degradation over time...",
    tags: ["React", "Debugging", "Performance"],
    icon: <Code className="h-full w-full" />,
    iconBg: "#AFDDFF",
  },
];

export function JournalEntries() {
  return (
    <section className="mb-16">
      <h2 className="mb-6 font-sans text-3xl font-bold">
        Recent Journal Entries
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {journalEntries.map((entry) => (
          <Card
            key={entry.id}
            className="group overflow-hidden rounded-none border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <CardHeader className="border-b-4 border-black bg-white p-4">
              <div className="mb-2 flex items-center gap-2">
                <div
                  className="h-10 w-10 rounded-full border-2 border-black p-2"
                  style={{ backgroundColor: entry.iconBg }}
                >
                  {entry.icon}
                </div>
                <span className="text-sm font-bold">{entry.date}</span>
              </div>
              <CardTitle className="text-xl font-bold leading-tight">
                {entry.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="mb-4 font-serif">{entry.preview}</p>
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-lg border-2 border-black bg-[#AFDDFF] px-2 py-1 text-xs font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t-4 border-black bg-white p-4">
              <Button className="w-full rounded-none border-4 border-black bg-[#FF9149] px-4 py-2 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2">
          <Button className="rounded-none border-4 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#AFDDFF] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Previous
          </Button>
          <Button className="rounded-none border-4 border-black bg-[#60B5FF] px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            1
          </Button>
          <Button className="rounded-none border-4 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#AFDDFF] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            2
          </Button>
          <Button className="rounded-none border-4 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#AFDDFF] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            3
          </Button>
          <Button className="rounded-none border-4 border-black bg-white px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#AFDDFF] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
