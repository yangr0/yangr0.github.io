import Head from "next/head";
import type { Metadata } from "next";
import type { Viewport } from "next";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Endorsements from "@/components/endorsements";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Raymond Yang | Full-Stack Developer",
  authors: [
    {
      name: "Raymond Yang"
    }
  ],
  creator: "Raymond Yang",
  description: "Raymond Yang - DevOps Engineer, Software Engineer, Frontend Developer",
  keywords: ["Raymond Yang", "DevOps Engineer", "Software Engineer", "Full Stack Developer", "Next.js", "Terraform", "AWS", "Portfolio", "Kubernetes", "Site Reliability Engineer"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Endorsements />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
