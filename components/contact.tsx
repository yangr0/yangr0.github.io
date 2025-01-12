"use client";

import "@/components/contact/contact.css";

export default function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    console.log(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
      }),
    });
  }
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="form-title">Interested in working with me?</div>
          <form className="form-bottom-block" onSubmit={handleSubmit}>
            <div className="form-name">Name</div>
            <input className="form-name-input" type="text" required name="name" />
            <div className="form-email">Email Address</div>
            <input className="form-email-input"type="email" required name="email" />
            <div className="form-message">Message</div>
            <textarea className="form-message-input" required name="message"></textarea>
            <div className="form-submit-block">
              <button className="form-submit-button" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
