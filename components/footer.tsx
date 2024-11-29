import "@/components/footer/footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-content">
          <p className="footer-content-p">
            Built with Next.js, Typscript, HTML, CSS. Hosted on GitHub Pages.
            <br />
            Inspired by <a href="https://www.sebastianpetravic.com" target="blank_">Sebastian Petravic</a>, <a href="https://mattfarley.ca" target="blank_">Matt Farley</a>, <a href="https://www.rammaheshwari.com" target="blank_">Ram Maheshwari</a>.
            <br />
            Thanks to <a href="https://media.illinois.edu/advertising/hall-steve" target="blank_">Prof. Steven Hall</a> @ UIUC for introducing me to Avenir Next.
            <br />
            Made with &#x2764;&#xfe0f; by <a href="https://github.com/yangr0" target="blank_">Raymond Yang</a>.
          </p>
        </div>
      </section>
    </>
  )
}
