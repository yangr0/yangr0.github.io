import Head from "next/head";
import type { Metadata } from "next";
import type { Viewport } from "next";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "Raymond Yang | Portfolio",
  author: "Raymond Yang",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}


export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <About />
      </main>
    </>
  );
}
