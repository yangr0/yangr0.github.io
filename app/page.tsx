"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Endorsements from "@/components/endorsements";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
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
