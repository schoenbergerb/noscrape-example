import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import NoscrapeFontFace from "@/components/noscrape/NoscrapeFontFace";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Noscrape - Example",
  description: "This is a Noscrape-Example, powered by NextJS 14",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
    <head>
        <title>noscrape - demo</title>
        <Analytics />
        <NoscrapeFontFace/>
    </head>
    <body className={"p-0"}>{children}</body>
    </html>
  );
}
