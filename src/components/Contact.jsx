import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s16ta5q",      // Service ID
        "template_9w148pw",     // Template ID
        formRef.current,
        "p36c8vuRPDRAhWuR5"     // Public Key
      )
      .then(() => {
        setSent(true);
        setTimeout(() => setSent(false), 2000);
        formRef.current.reset();
      });
  };

  return (
    <div className="min-h-screen px-6 py-16 bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-fuchsia-400">
          Contact Me
        </h1>

        <p className="text-slate-300 leading-relaxed text-lg">
          Feel free to reach out for collaborations, opportunities, or any
          professional inquiries. I usually respond within 24 hours.
        </p>

        {/* Contact Info */}
        <div className="space-y-3 text-slate-300">

          <p>
            <span className="font-semibold text-fuchsia-300">Email:</span>
            <a
              href="mailto:ayabr360@gmail.com"
              className="ml-2 hover:text-fuchsia-400 transition"
            >
              ayabr360@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-fuchsia-300">LinkedIn:</span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="ml-2 hover:text-fuchsia-400 transition"
            >
              linkedin.com/in/aya
            </a>
          </p>

          <p>
            <span className="font-semibold text-fuchsia-300">GitHub:</span>
            <a
              href="https://github.com/ayabr52"
              target="_blank"
              className="ml-2 hover:text-fuchsia-400 transition"
            >
              github.com/ayabr52
            </a>
          </p>

          <p>
            <span className="font-semibold text-fuchsia-300">Location:</span>
            <span className="ml-2">Homs, Syria</span>
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 bg-slate-900/40 p-6 rounded-xl border border-slate-800"
        >
          <div>
            <label className="block text-sm mb-1 text-slate-400">Name</label>
            <input
              type="text"
              name="from_name"
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:border-fuchsia-400 outline-none"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-slate-400">Email</label>
            <input
              type="email"
              name="name"
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:border-fuchsia-400 outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-slate-400">Message</label>
            <textarea
              name="message"
              className="w-full h-32 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:border-fuchsia-400 outline-none"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-fuchsia-500 text-slate-950 font-semibold hover:bg-fuchsia-400 transition"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-400 text-sm font-semibold">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
