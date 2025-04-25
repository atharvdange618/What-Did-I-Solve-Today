"use client";

import type React from "react";

import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "@deemlol/next-icons";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="mb-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-sans text-4xl font-bold md:text-5xl lg:text-6xl">
          Get in Touch
        </h1>
        <p className="mx-auto max-w-2xl font-serif text-lg">
          Have a question, suggestion, or just want to say hello? I'd love to
          hear from you!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Contact Information
          </h2>

          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-black bg-[#60B5FF]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="font-serif">atharvdange.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-black bg-[#FF9149]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="font-serif">+91 8149011956</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-black bg-[#AFDDFF]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="font-serif">Pune, India</p>
              </div>
            </div>
          </div>

          <h3 className="mb-4 font-bold">Connect with me</h3>
          <div className="flex gap-4">
            <Button
              asChild
              size="icon"
              className="rounded-none border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#FF9149] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <a
                href="https://www.instagram.com/atharvdange._"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
            <Button
              size="icon"
              className="rounded-none border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#FF9149] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <a
                href="https://github.com/atharvdange618"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              size="icon"
              className="rounded-none border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#FF9149] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <a
                href="https://www.linkedin.com/in/atharvdange"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              size="icon"
              className="rounded-none border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#FF9149] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <a href="mailto:atharvdange.dev@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          <div className="mt-8">
            <Card className="overflow-hidden rounded-none border-4 border-black bg-[#FFECDB] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Office Hours</h3>
                <div className="space-y-2 font-serif">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span>Free to chat</span>
                  </p>
                </div>
                <p className="mt-4 font-serif text-sm">
                  I typically respond to messages within 24-48 hours during
                  business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-sans text-3xl font-bold">Send a Message</h2>

          {isSubmitted ? (
            <Card className="overflow-hidden rounded-none border-4 border-black bg-[#E0FFF1] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-black bg-[#60B5FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
                <p className="font-serif">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <Button
                  className="mt-6 rounded-none border-4 border-black bg-[#60B5FF] px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="rounded-none border-4 border-black bg-white px-3 py-2 font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="rounded-none border-4 border-black bg-white px-3 py-2 font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="font-bold">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="rounded-none border-4 border-black bg-white px-3 py-2 font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-bold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  rows={6}
                  className="rounded-none border-4 border-black bg-white px-3 py-2 font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-none border-4 border-black bg-[#60B5FF] px-6 py-3 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
