import "@/components/nav/nav.css"
import Image from "next/image";
import ScrollAppear from "@/scroll-appear/scroll-appear";
import githubIcon from "@/public/github-white.svg";
import linkedinIcon from "@/public/linkedin-white.svg";

const linkedinIconStyle = {
  fill: "white",
}

export default function Nav() {
  return (
    <>
      <section className="nav">
        <div className="nav-left">m</div>
        <nav className="nav-center-block">
          <div className="nav-center">
            <div className="nav-home">~</div>
            <div className="nav-about">whoami</div>
            <div className="nav-work">Work</div>
            <div className="nav-contact">Contact</div>
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
