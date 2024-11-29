import "@/components/skills/skills.css";
import ScrollAppear from "@/components/scroll-appear/scroll-appear";

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-top-block">Full-Stack Engineer</div>
          <div className="skills-bottom-block">
            <div className="skills-column-left">
              <div className="skills-column-title">Frontend Developer</div>
              <div className="skills-column-experience">Working Experience:
                <div>Recently Learned</div>
              </div>
              <div className="skills-column-languages">Languages:
                <div>TypeScript, HTML, CSS, LaTeX</div>
              </div>
              <div className="skills-column-points">Frameworks:
                <div>Next.js <br/>React <br/>Tailwind CSS</div>
              </div>
            </div>
            <div className="skills-column-middle">
              <div className="skills-column-title">DevOps Engineer</div>
              <div className="skills-column-experience">Working Experience:
                <div>2+ years</div>
              </div>
              <div className="skills-column-languages">Languages:
                <div>HCL, Python, Bash, YAML</div>
              </div>
              <div className="skills-column-points">Dev Tools:
                <div>Terraform <br/>Kubernetes <br/>Git <br/>Puppet <br/>Docker <br/>AWS Services <br/>GitHub Actions <br/>Elasticsearch</div>
              </div>
            </div>
            <div className="skills-column-right">
              <div className="skills-column-title">Backend Developer</div>
              <div className="skills-column-experience">Work Experience:
                <div>4+ years</div>
              </div>
              <div className="skills-column-languages">Languages:
                <div>Rust, Python, Bash, SQL, TOML</div>
              </div>
              <div className="skills-column-points">Technologies:
                <div>Actix Web <br/>Flask <br/>Cargo Lambda <br/>Reqwest <br/>Rayon <br/>Pola-rs <br/>Prompt Toolkit <br/>SQLite <br/>MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
