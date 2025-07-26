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
                  Freshman at UIUC from a rural town in Illinois with over four years of real-world experience in tech, working across both startups and Fortune 100. I've been incredibly lucky to have done a wide range of work—building cloud infrastructure, automating workflows, scaling systems, and building security software. 
                  <br />
                  Right now, I’m on a senior-level security team at CVS Health, where we’re building a Threat Detection Engine that ingests and analyzes over 100TB of logs per day to defend internal systems against attacks. 
                  <br />
                  I'm very fortunate to have had these opportunities so early on in life. It's given me the chance to work on projects I never imagined I'd be part of, learn how real-world systems operate, and meet some truly generous and inspiring people along the way.
                  <br />
                  <br />
                  Outside of work, I enjoy listening to music, playing video games, playing pick-up soccer, skateboarding, learning languages, and tinkering with my computer.
                </div>
              </div>
          </div>
            <div className="about-right">
              <div className="timeline-block">
                  <div className="timeline-title">Staff Security Engineer @ CVS Health
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
