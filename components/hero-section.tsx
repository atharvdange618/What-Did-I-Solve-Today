"use client";

import { CalendarIcon, Code2 } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const router = useRouter();

  return (
    <section className="mb-16 mt-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center items-start">
          <div className="mb-4 inline-block rounded-lg border-4 border-black bg-[#FFECDB] px-3 py-1 text-sm font-bold">
            {date?.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <h1 className="mb-4 font-sans text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Today I solved a{" "}
            <span className="text-[#FF9149]">React performance</span> puzzle
          </h1>
          <p className="mb-6 font-serif text-lg">
            Join me on my daily journey of tackling technical challenges,
            debugging complex issues, and learning new skills. Every day brings
            a new problem to solve!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="rounded-none border-4 border-black bg-[#60B5FF] px-6 py-3 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            >
              <CalendarIcon className="mr-2 h-5 w-5" />
              Browse Journal
            </Button>
            <Button
              onClick={() => router.push("/about")}
              className="rounded-none border-4 border-black bg-white px-6 py-3 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#AFDDFF] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              About Me
            </Button>
          </div>

          {isCalendarOpen && (
            <div className="relative mt-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-none border-4 border-black bg-white p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          )}
        </div>

        <Card className="overflow-hidden rounded-none border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="border-b-4 border-black bg-[#60B5FF] p-4">
            <CardTitle className="flex items-center justify-between text-2xl font-bold">
              <span>Today's Solve</span>
              <div className="flex gap-2">
                <span className="inline-block rounded-lg border-2 border-black bg-white px-2 py-1 text-xs font-bold">
                  React
                </span>
                <span className="inline-block rounded-lg border-2 border-black bg-white px-2 py-1 text-xs font-bold">
                  Performance
                </span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-10 w-10 rounded-full border-2 border-black bg-[#AFDDFF] p-2">
                <Code2 className="h-full w-full" />
              </div>
              <div>
                <h3 className="font-bold">Optimizing React Renders</h3>
                <p className="text-sm text-gray-600">
                  Difficulty: Intermediate
                </p>
              </div>
            </div>

            <p className="mb-4 font-serif">
              Today I tackled a performance issue in a React application where
              unnecessary re-renders were causing sluggish UI. I discovered that
              a large list component was re-rendering entirely when only a
              single item changed.
            </p>

            <div className="mb-4 rounded-lg border-2 border-black bg-[#f6f8fa] p-4 font-mono text-sm">
              <pre>
                <code>{`// Before
const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}`}</code>
              </pre>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-block rounded-lg border-2 border-black bg-[#AFDDFF] px-2 py-1 text-xs font-bold">
                React.memo
              </span>
              <span className="inline-block rounded-lg border-2 border-black bg-[#AFDDFF] px-2 py-1 text-xs font-bold">
                useMemo
              </span>
              <span className="inline-block rounded-lg border-2 border-black bg-[#AFDDFF] px-2 py-1 text-xs font-bold">
                useCallback
              </span>
            </div>
          </CardContent>
          <CardFooter className="border-t-4 border-black bg-[#FFECDB] p-4">
            <Button className="w-full rounded-none border-4 border-black bg-black px-6 py-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(255,145,73,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(255,145,73,1)]">
              Read Full Solution
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
