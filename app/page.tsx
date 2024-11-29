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
import Mobile from "@/components/mobile";

export default function Page() {
  const [show, setShow] = useState(true);
  // const [windowWidth, setWindowWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  const triggerToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      function watchWidth() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", watchWidth);

      return function () {
        window.removeEventListener("resize", watchWidth);
      };
    }
  }, []);
  if (windowWidth  <= 430) {
    return <Mobile />;
  };
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
