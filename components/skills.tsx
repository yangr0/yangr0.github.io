import "@/components/skills/skills.css";

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-top-block">Full-Stack Developer</div>
          <div className="skills-bottom-block">
            <div className="skills-column-left">
              <div className="skills-column-title">Frontend Developer</div>
              <div className="skills-column-experience">Work Experience:
                <div>Recently Learned</div>
              </div>
              <div className="skills-column-languages">Languages:
                <div>TypeScript, HTML, CSS</div>
              </div>
              <div className="skills-column-points">Frameworks:
                <div>React Native <br/>Next.js <br/>Figma <br/>Expo <br/></div>
              </div>
            </div>
            <div className="skills-column-middle">
              <div className="skills-column-title">DevOps Engineer</div>
              <div className="skills-column-experience">Work Experience:
                <div>2+ years</div>
              </div>
              <div className="skills-column-languages">Languages:
                <div>HCL, Python, Bash</div>
              </div>
              <div className="skills-column-points">Dev Tools:
                <div>Terraform <br/>Kubernetes <br/>AWS <br/>Git <br/>Puppet <br/>Docker <br/>GitHub Actions</div>
              </div>
            </div>
            <div className="skills-column-right">
              <div className="skills-column-title">Backend Developer</div>
              <div className="skills-column-experience">Work Experience:
                <div>4+ years</div>
              </div>
              <div className="skills-column-languages">Languages:
                <div>Rust, Python, SQL</div>
              </div>
              <div className="skills-column-points">Technologies:
                <div>Actix Web <br/>Flask <br/>Cargo Lambda <br/>Supabase <br/>MongoDB <br/>Elasticsearch</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
