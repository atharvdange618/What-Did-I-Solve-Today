import { Code, Database, Server } from "@deemlol/next-icons";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function AboutContent() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "React Native",
        "Next.js",
        "Tailwind",
        "TanStack Query",
        "Zustand",
      ],
      icon: <Code className="h-full w-full" />,
      iconBg: "#AFDDFF",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Hono", "RESTful APIs", "Git", "Postman"],
      icon: <Server className="h-full w-full" />,
      iconBg: "#FFECDB",
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Prisma", "Mongoose"],
      icon: <Database className="h-full w-full" />,
      iconBg: "#E0FFF1",
    },
  ];

  return (
    <section className="mb-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-sans text-4xl font-bold md:text-5xl lg:text-6xl">
          About Me
        </h1>
        <p className="mx-auto max-w-2xl font-serif text-lg">
          The developer behind "What Did I Solve Today" — sharing my journey
          through technical challenges and solutions.
        </p>
      </div>

      <div className="mb-16 gap-8 flex flex-col md:flex-row">
        <div className="order-2 md:order-1">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Hello, I'm Atharv
          </h2>
          <div className="space-y-4 font-serif">
            <p>
              I'm a full-stack developer with a passion for solving complex
              technical problems and sharing what I learn along the way. This
              blog is my way of documenting my journey and hopefully helping
              others who might face similar challenges.
            </p>
            <p>
              With over 1+ year of experience in software development, I've
              worked on everything from small startups to large enterprise
              applications. I believe in continuous learning and pushing myself
              to tackle new technologies and approaches.
            </p>
            <p>
              When I'm not coding, you can find me watching movies or exploring
              the world around me with my gf. I believe that diverse interests
              fuel creativity in problem-solving.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="rounded-none border-4 border-black bg-[#60B5FF] px-6 py-3 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Link href={"/contact"}>Get in Touch</Link>
            </Button>
            <Button
              asChild
              className="rounded-none border-4 border-black bg-white px-6 py-3 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#AFDDFF] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <a href="/Atharv-Dange-Resume.pdf" download>
                View Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-none border-4 border-black bg-[#FF9149]"></div>
            <div className="relative overflow-hidden rounded-none border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/about-pic.jpg?height=400&width=400"
                alt="Atharv Dange - Developer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-16 border-2 border-black" />

      <div className="mb-16">
        <h2 className="mb-8 text-center font-sans text-3xl font-bold">
          My Skills & Expertise
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <Card
              key={skill.category}
              className="overflow-hidden rounded-none border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="border-b-4 border-black bg-white p-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-12 w-12 rounded-full border-2 border-black p-2"
                    style={{ backgroundColor: skill.iconBg }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <ul className="grid grid-cols-2 gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#FF9149]"></span>
                      <span className="font-serif">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-16 border-2 border-black" />

      <div className="mb-16">
        <h2 className="mb-8 text-center font-sans text-3xl font-bold">
          My Journey
        </h2>

        <div className="relative ml-6 border-l-4 border-black pl-8">
          <div className="mb-12 relative">
            <div className="absolute -left-12 top-0 h-8 w-8 rounded-full border-4 border-black bg-[#60B5FF]"></div>
            <h3 className="mb-2 text-xl font-bold">
              Jr. Software Engineer at Smartscripts
            </h3>
            <p className="mb-2 font-serif text-sm text-gray-600">
              2024 - Present
            </p>
            <p className="font-serif">
              Leading development of Node.js based solutions, superfast React
              apps, mentoring junior developers, and implementing best practices
              for code quality and performance.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-12 top-0 h-8 w-8 rounded-full border-4 border-black bg-[#FFECDB]"></div>
            <h3 className="mb-2 text-xl font-bold">
              Electronics and Telecommnuications Degree
            </h3>
            <p className="mb-2 font-serif text-sm text-gray-600">2020 - 2024</p>
            <p className="font-serif">
              Graduated with honors, specializing in software engineering and
              algorithms.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-none border-4 border-black bg-[#AFDDFF] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="mb-4 text-center font-sans text-3xl font-bold">
          Let's Connect!
        </h2>
        <p className="mb-6 text-center font-serif">
          I'm always open to interesting conversations, collaboration
          opportunities, or just saying hello.
        </p>
        <div className="flex justify-center">
          <Button className="rounded-none border-4 border-black bg-[#FF9149] px-6 py-3 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Link href={"/contact"}>Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
