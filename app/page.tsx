import type { Metadata } from "next";
import Hero from "@/components/hero";
import type { Viewport } from "next";

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
    <main>
      <Hero />
    </main>
  );
}
