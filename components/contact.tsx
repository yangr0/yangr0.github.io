"use client";

import "@/components/contact/contact.css";
import ScrollAppear from "@/components/scroll-appear/scroll-appear";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
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
