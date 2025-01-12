"use client";

import "@/components/contact/contact.css";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [success, setSuccess] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };
    const response = await fetch("https://api.web3forms.com/submit", {
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
    })
    .then(resp => resp.json().then(data => {
      console.log(data);
      setShowConfirmation(true);
      setName(target.name.value);
      setSuccess(data.success);
    }))
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
      {showConfirmation && success && (
        <div className="flex flex-col gap-y-6 fixed h-1/2 w-1/2 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border-2 rounded-xl justify-center items-center text-xl bg-black border-stone-300">
          <h1>I have received your message!</h1>
          <h1>Thank you for your interest {name}</h1>
          <h1 className="mb-4">I will get back to you as soon as I see your message</h1>
          <button className="absolute bottom-[10%] border-[.1rem] border-[#262626] rounded-full px-10 py-2 font-semibold hover:bg-[#151515]" onClick={() => setShowConfirmation(false)}>Close</button>
        </div>
      )}
      {showConfirmation && !success && (
        <div className="flex flex-col gap-y-6 fixed h-1/2 w-1/2 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border-2 rounded-xl justify-center items-center text-xl bg-black border-stone-300">
          <h1>Message failed to send!</h1>
          <h1 className="mb-4">Please refresh and try again</h1>
          <button className="absolute bottom-[10%] border-[.1rem] border-[#262626] rounded-full px-10 py-2 font-semibold hover:bg-[#151515]" onClick={() => setShowConfirmation(false)}>Close</button>
        </div>
      )}
    </>
  )
}
