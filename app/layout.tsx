import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitGOod Forum",
  description: "An online web forum for avid learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/logo.png" sizes="any" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
