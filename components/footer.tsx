import "@/components/footer/footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-content">
          <p className="footer-content-p">
            Last updated: DATE_REPLACE (Automated using <a href="https://github.com/features/actions" target="blank_">GitHub Actions</a>)
            <br />
            Built with <a href="https://nextjs.org/" target="blank_">Next.js</a>, <a href="https://www.typescriptlang.org/" target="blank_">Typscript</a>, HTML, CSS. 
            <br />
            Inspired by <a href="https://www.sebastianpetravic.com" target="blank_">Sebastian Petravic</a>, <a href="https://mattfarley.ca" target="blank_">Matt Farley</a>, <a href="https://www.rammaheshwari.com" target="blank_">Ram Maheshwari</a>.
            <br />
            Shoutout to <a href="https://media.illinois.edu/advertising/hall-steve" target="blank_">Prof. Steve Hall</a> @ UIUC for introducing me to Avenir Next.
            <br />
            Made with &#x2764;&#xfe0f; by <a href="https://github.com/yangr0" target="blank_">Raymond Yang</a>.
          </p>
        </div>
      </section>
    </>
  )
}
