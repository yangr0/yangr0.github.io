import "@/components/about/about.css";
import ScrollAppear from "@/components/scroll-appear/scroll-appear";

export default function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-left">
            <div className="about-title-block">
              <div className="about-title">My Career So Far</div>
            </div>
            <div className="about-body-block">
              <div className="about-body">
                Freshman at University of Illinois Urbana-Champaign (UIUC) with over four years of experience working in tech. I was a software engineer intern at Blackbot Inc. and currently working as a DevOps engineer at Mezzanotte Labs. I’ve led cloud operations, developed automation tools, and created CI/CD workflows, all while improving productivity and preventing security vulnerabilities. I’m passionate about building scalable systems, leveraging tools like Kubernetes, Terraform, and AWS, and eager to bring my problem-solving skills to new challenges.
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="timeline-block">
              <div className="timeline-1">DevOps Engineer - Mezzanotte Labs</div>
              <div className="timeline-2">Software Engineer Intern - Blackbot Inc.</div>
              <div className="timeline-3">Frontend Engineer</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
