import "@/components/about/about.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section id="about" className="about-section">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="about-container">
            <div className="about-left">
              <div className="about-title-block">
                <div className="about-title">whoami</div>
              </div>
              <div className="about-body-block">
                <div className="about-body">
                  Freshman at University of Illinois Urbana-Champaign (UIUC) with over four years of real-world experience working in tech. I’ve led cloud operations, developed automation tools, and created CI/CD workflows, all while improving productivity and preventing security vulnerabilities. I’m passionate about building scalable systems, leveraging tools like Kubernetes, Terraform, and AWS, and eager to bring my problem-solving skills to new challenges.
                  <br />
                  <br />
                  Outside of work, I enjoy listening to music, playing video games, playing pick-up soccer (football), skateboarding, learning (human) languages and about different cultures, and tinkering with my computer.
                </div>
              </div>
          </div>
            <div className="about-right">
              <div className="timeline-block">
                  <div className="timeline-title">Staff Security Enginer @ CVS Health
                    <div className="timeline-description">Full-Time (Contract)</div>
                    <div className="timeline-description">March 2025 — Present</div>
                  </div>
                  <div className="timeline-title">Contract Employee @ Colossus Technologies Group
                    <div className="timeline-description">Contract</div>
                    <div className="timeline-description">March 2025 — Present</div>
                  </div>

                  <div className="timeline-title">DevOps Engineer @ Mezzanotte Labs
                    <div className="timeline-description">Part-Time</div>
                    <div className="timeline-description">March 2022 — Present</div>
                  </div>
                  <div className="timeline-title">DevOps Engineer Intern @ Pling Inc.
                    <div className="timeline-description">Full-Time</div>
                    <div className="timeline-description">Jan. 2025 — Feb. 2025</div>
                  </div>
                  <div className="timeline-title">Software Engineer Intern @ Blackbot Security
                    <div className="timeline-description">Part-Time</div>
                    <div className="timeline-description">Sept. 2020 — November 2021</div>
                  </div>
              </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
