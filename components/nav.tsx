"use client";
import "@/components/nav/nav.css"
import Image from "next/image";
import ScrollAppear from "@/components/scroll-appear/scroll-appear";
import githubIcon from "@/public/github-white.svg";
import linkedinIcon from "@/public/linkedin-white.svg";
import React from "react";

export default function Nav() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="nav">
        <div className="nav-left">m</div>
        <nav className="nav-center-block">
          <div className="nav-center">
            <div className="nav-home" onClick={() => scrollTo("hero")}>~</div>
            <div className="nav-home" onClick={() => scrollTo("about")}>whoami</div>
            <div className="nav-home" onClick={() => scrollTo("work")}>work</div>
            <div className="nav-home" onClick={() => scrollTo("contact")}>contact</div>
          </div>
        </nav>
        <div className="nav-right">
          <a href="https://github.com/yangr0" target="_blank">
            <div className="nav-github">
              <Image
                src={githubIcon}
                width={25}
                height={25}
                alt="github_icon"
              />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/raymond-y-3061841b7" target="_blank">
            <div className="nav-linkedin">
              <Image
                src={linkedinIcon}
                width={30}
                height={30}
                alt="linkedin_icon"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
