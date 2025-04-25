"use client";

import { CalendarIcon } from "lucide-react";
import { Code, Database, Server, Search } from "@deemlol/next-icons";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

// Sample data for archive entries
const archiveEntries = [
  {
    id: 1,
    title: "Optimizing React Renders with useMemo and useCallback",
    date: "April 24, 2024",
    preview:
      "Today I tackled a performance issue in a React application where unnecessary re-renders were causing sluggish UI...",
    tags: ["React", "Performance", "JavaScript"],
    icon: <Code className="h-full w-full" />,
    iconBg: "#AFDDFF",
    month: "April",
    year: 2024,
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
    month: "April",
    year: 2024,
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
    month: "April",
    year: 2024,
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
    month: "April",
    year: 2024,
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
    month: "April",
    year: 2024,
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
    month: "April",
    year: 2024,
  },
  {
    id: 7,
    title: "Creating a Custom Authentication System with JWT",
    date: "March 15, 2024",
    preview:
      "Today I implemented a secure authentication system using JSON Web Tokens for a client's application...",
    tags: ["Security", "Node.js", "Authentication"],
    icon: <Server className="h-full w-full" />,
    iconBg: "#FFECDB",
    month: "March",
    year: 2024,
  },
  {
    id: 8,
    title: "Optimizing Docker Containers for Production",
    date: "March 10, 2024",
    preview:
      "I spent the day fine-tuning our Docker setup to reduce image size and improve startup times in production...",
    tags: ["Docker", "DevOps", "Performance"],
    icon: <Server className="h-full w-full" />,
    iconBg: "#E0FFF1",
    month: "March",
    year: 2024,
  },
  {
    id: 9,
    title: "Implementing Infinite Scroll with React Query",
    date: "February 28, 2024",
    preview:
      "Today I replaced our pagination system with an infinite scroll implementation using React Query...",
    tags: ["React", "UX", "Performance"],
    icon: <Code className="h-full w-full" />,
    iconBg: "#AFDDFF",
    month: "February",
    year: 2024,
  },
  {
    id: 10,
    title: "Solving Complex State Management with Context API",
    date: "February 15, 2024",
    preview:
      "I refactored a complex state management solution using React's Context API instead of Redux...",
    tags: ["React", "State Management", "Context API"],
    icon: <Code className="h-full w-full" />,
    iconBg: "#AFDDFF",
    month: "February",
    year: 2024,
  },
];

export function ArchiveContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<number | string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Get unique years from entries
  const years = Array.from(
    new Set(archiveEntries.map((entry) => entry.year))
  ).sort((a, b) => b - a);

  // Get unique months from entries
  const months = Array.from(
    new Set(archiveEntries.map((entry) => entry.month))
  );

  // Get unique tags from entries
  const tags = Array.from(
    new Set(archiveEntries.flatMap((entry) => entry.tags))
  );

  // Filter entries based on search term, month, year, and tag
  const filteredEntries = archiveEntries.filter((entry) => {
    const matchesSearch =
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.preview.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesMonth =
      selectedMonth === "all" || entry.month === selectedMonth;

    const matchesYear = selectedYear === "all" || entry.year === selectedYear;

    const matchesTag =
      selectedTag === "all" || entry.tags.includes(selectedTag);

    const matchesDate =
      !selectedDate ||
      new Date(entry.date).toDateString() === selectedDate.toDateString();

    return (
      matchesSearch && matchesMonth && matchesYear && matchesTag && matchesDate
    );
  });

  // Group entries by month and year
  const groupedEntries = filteredEntries.reduce(
    (acc, entry) => {
      const key = `${entry.month} ${entry.year}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(entry);
      return acc;
    },
    {} as Record<string, typeof archiveEntries>
  );

  return (
    <section className="mb-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-sans text-4xl font-bold md:text-5xl lg:text-6xl">
          Archive
        </h1>
        <p className="mx-auto max-w-2xl font-serif text-lg">
          Browse through all my past journal entries and solutions.
        </p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-4">
        <div className="relative md:col-span-2">
          <Input
            type="search"
            placeholder="Search entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-none border-4 border-black bg-white px-3 py-2 font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
        </div>

        <Select value={selectedTag} onValueChange={setSelectedTag}>
          <SelectTrigger className="rounded-none border-4 border-black bg-white px-3 py-2 font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent className="rounded-none border-4 border-black">
            <SelectItem value="all">All Tags</SelectItem>
            {tags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="relative">
          <Button
            className="w-full justify-between rounded-none border-4 border-black bg-white px-3 py-2 font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-[#AFDDFF]"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            {selectedDate ? selectedDate.toLocaleDateString() : "Select Date"}
            <CalendarIcon className="h-4 w-4" />
          </Button>
          {isCalendarOpen && (
            <div className="absolute right-0 z-10 mt-2">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setIsCalendarOpen(false);
                }}
                className="rounded-none border-4 border-black bg-white p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {selectedDate && (
          <Button
            size="sm"
            className="flex items-center gap-1 rounded-none border-2 border-black bg-[#AFDDFF] px-2 py-1 text-xs font-bold"
            onClick={() => setSelectedDate(undefined)}
          >
            Date: {selectedDate.toLocaleDateString()}
            <span className="ml-1">×</span>
          </Button>
        )}
        {selectedTag !== "all" && (
          <Button
            size="sm"
            className="flex items-center gap-1 rounded-none border-2 border-black bg-[#AFDDFF] px-2 py-1 text-xs font-bold"
            onClick={() => setSelectedTag("all")}
          >
            Tag: {selectedTag}
            <span className="ml-1">×</span>
          </Button>
        )}
        {searchTerm && (
          <Button
            size="sm"
            className="flex items-center gap-1 rounded-none border-2 border-black bg-[#AFDDFF] px-2 py-1 text-xs font-bold"
            onClick={() => setSearchTerm("")}
          >
            Search: {searchTerm}
            <span className="ml-1">×</span>
          </Button>
        )}
        {(selectedDate || selectedTag !== "all" || searchTerm) && (
          <Button
            size="sm"
            className="flex items-center gap-1 rounded-none border-2 border-black bg-white px-2 py-1 text-xs font-bold"
            onClick={() => {
              setSelectedDate(undefined);
              setSelectedTag("all");
              setSearchTerm("");
            }}
          >
            Clear All Filters
          </Button>
        )}
      </div>

      {Object.keys(groupedEntries).length > 0 ? (
        Object.entries(groupedEntries)
          .sort(([a], [b]) => {
            const [aMonth, aYear] = a.split(" ");
            const [bMonth, bYear] = b.split(" ");
            return (
              Number(bYear) - Number(aYear) ||
              months.indexOf(bMonth) - months.indexOf(aMonth)
            );
          })
          .map(([monthYear, entries]) => (
            <div key={monthYear} className="mb-12">
              <h2 className="mb-6 inline-block rounded-none border-4 border-black bg-[#60B5FF] px-4 py-2 text-2xl font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {monthYear}
              </h2>

              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {entries.map((entry) => (
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
            </div>
          ))
      ) : (
        <div className="rounded-none border-4 border-black bg-[#FFECDB] p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="mb-4 text-2xl font-bold">No entries found</h3>
          <p className="font-serif">
            Try adjusting your search filters to find what you're looking for.
          </p>
        </div>
      )}

      <Separator className="my-12 border-2 border-black" />

      <div className="flex justify-center">
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
