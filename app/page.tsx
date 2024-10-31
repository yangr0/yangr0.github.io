import type { Metadata } from 'next'
import Intro from "@/components/intro";

export const metadata: Metadata = {
  title: "Raymond Yang | Portfolio",
};

export default function Home() {
  return (
    <main>
      <Intro />
    </main>
  );
}
