import Head from 'next/head';

export default function Intro() {
  return (
    <>
      <section className="hero-section">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        </Head>
        <h1 className="hero-title">Raymond Yang</h1>
        <p className="hero-body">
          Passionate about optimizing infrastructure and building highly scalable
          systems. I am always seeking to expand my skillset and innovate through
          continuous learning and hands-on experience. Learn more about me below.
        </p>
      </section>
    </>
  )
}
