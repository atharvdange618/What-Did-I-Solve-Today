import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What Did I Solve Today",
  description:
    "Join me on my daily journey of tackling technical challenges, debugging complex issues, and learning new skills. Every day brings a new problem to solve!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
