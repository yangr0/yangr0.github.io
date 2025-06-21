import "@/components/endorsements/endorsements.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Endorsements() {
  return (
    <>
      <section id="endorsements" className="endorsements-section">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="endorsements-container">
            <div className="endorsements-title">Working with me</div>

            <div className="endorsements-content">
              <p>
                &quot;I had the privilege of working with Raymond as an intern for our Engineering department from September 2020 to November 2021. Raymond’s work as a Software Engineering Intern was outstanding. Particularly with his contributions to the Atomic Red Team project, product development, C2 payload creation, and successful integration of MythicC2 into our adversary emulation solution.
              </p>
              <br />
              <p>
                Raymond displayed exceptional leadership by effectively mentoring other interns and showcasing a remarkable ability to translate complex design principles into practical learning experiences. His adaptability and quick learning in our fast-paced startup environment were impressive, marking him as both a proactive team player and a quick learner.
              </p>
              <br />
              <p>
                Raymond&apos;s combination of technical skills, logical reasoning, and soft skills truly set him apart. He is not just a learner but a leader, whose contributions left a lasting impact. Raymond is undoubtedly poised for continued growth and success in any academic or professional setting. I&apos;m 100% confident in his ability to contribute significantly to any organization he joins.&quot;
              </p>
            </div>
            <div className="endorsements-person-block">
              <div className="endorsements-person-icon">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQHssyJTxgY8zA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725685622284?e=1755734400&v=beta&t=NddsSXZuKmdNp3AQAzwKpK0MmvFu7Ucai5bHOXRf3A8"
                  width={60}
                  height={60}
                  alt="daniel_icon"
                />
              </div>
              <div className="endorsements-person-info-block">
                <div className="endorsements-person-name">Daniel Acevedo</div>
                <div className="endorsements-person-position">Director of Offensive Operations @ Blackbot Security, Inc.</div>
              </div>
            </div>
        </motion.div>
      </section>
    </>
  )
}
