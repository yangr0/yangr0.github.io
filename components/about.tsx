import "@/components/about/about.css";
import ScrollAppear from "@/components/scroll-appear/scroll-appear";

export default function About() {
  return (
    <>
      <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-left">
              <ScrollAppear>
                <div className="about-title-block">
                  <div className="about-title">whoami</div>
                </div>
                <div className="about-body-block">
                  <div className="about-body">
                    Freshman at University of Illinois Urbana-Champaign (UIUC) with over four years of real-world experience working in tech. I was a software engineer intern at Blackbot Inc. and currently working as a DevOps engineer at Mezzanotte Labs. I’ve led cloud operations, developed automation tools, and created CI/CD workflows, all while improving productivity and preventing security vulnerabilities. I’m passionate about building scalable systems, leveraging tools like Kubernetes, Terraform, and AWS, and eager to bring my problem-solving skills to new challenges.
                  </div>
                </div>
              </ScrollAppear>
            </div>
            <div className="about-right">
              <ScrollAppear>
                <div className="timeline-block">
                    <div className="timeline-title">DevOps Engineer @ Mezzanotte Labs
                      <div className="timeline-description">Part-Time</div>
                      <div className="timeline-description">March 2022 — Present</div>
                    </div>
                    <div className="timeline-title">Software Engineer @ Blackbot Security
                      <div className="timeline-description">Part-Time (Internship)</div>
                      <div className="timeline-description">September 2020 — November 2021</div>
                    </div>
                </div>
              </ScrollAppear>
            </div>
        </div>
      </section>
    </>
  );
};
