import "@/components/hero/hero.css";
import ScrollDownButton from "@/components/hero/scroll-button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero-section">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="hero-container">
          <div className="hero-title-block">
            <h1 className="hero-title">Raymond Yang</h1>
          </div>
          <div className="hero-body-block">
            <p className="hero-body">
              Building and defending systems at petabyte scale, from secure cloud infrastructure to high-performance, full-stack applications.
            </p>
          </div>
          <div className="resume-block">
            <a className="resume-button" href="https://raw.githubusercontent.com/yangr0/resume/refs/heads/main/resume.pdf" target="blank_">
              View my resume
            </a>
          </div>
          <ScrollDownButton targetId="about"/>
        </motion.div>
      </section>
    </>
  );
};
