"use client";
import "@/components/nav/nav.css"
import Image from "next/image";
import githubIcon from "@/public/github-white.svg";
import linkedinIcon from "@/public/linkedin-white.svg";
import logo from "@/public/logo.svg";
import React from "react";

export default function Nav() {
  const scrollTo = (id: string) => {
    const e = document.getElementById(id);
    if (e) {
      e.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="nav">
        <div className="nav-left">
          <a href="https://yangr0.github.io" target="_blank">
            <div className="nav-logo-icon">
              <Image
                src={logo}
                width={25}
                height={25}
                alt="logo_icon"
              />
            </div>
          </a>
        </div>
        <nav className="nav-center-block">
          <div className="nav-center">
            <div onClick={() => scrollTo("hero")}>~</div>
            <div onClick={() => scrollTo("about")}>whoami</div>
            <div onClick={() => scrollTo("skills")}>skills</div>
            <div onClick={() => scrollTo("endorsements")}>endorsements</div>
            <div onClick={() => scrollTo("contact")}>contact</div>
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
