import "@/components/hero/hero.css";
import ScrollDownButton from "@/components/hero/scroll-button";
import ScrollAppear from "@/components/scroll-appear/scroll-appear";

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <ScrollAppear>
            <div className="hero-title-block">
              <h1 className="hero-title">Raymond Yang</h1>
            </div>
            <div className="hero-body-block">
              <p className="hero-body">
                Passionate about optimizing infrastructure and building highly scalable
                systems. I am always seeking to expand my skillset and innovate through
                continuous learning and hands-on experience.
              </p>
            </div>
            <div className="resume-block">
              <a className="resume-button" href="https://raw.githubusercontent.com/yangr0/resume/refs/heads/main/resume.pdf" target="blank_">
                View my resume
              </a>
            </div>
          </ScrollAppear>
        </div>
        <ScrollDownButton targetId="about"/>
      </section>
    </>
  );
};
