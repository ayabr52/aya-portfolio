import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function SecretMessage() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s16ta5q", // Service ID
        "template_9w148pw", // Template ID
        formRef.current,
        "p36c8vuRPDRAhWuR5", // Public Key
      )
      .then(
        () => {
          setSent(true);
          setTimeout(() => setSent(false), 2000);
          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        },
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
      <textarea
        name="message"
        className="w-full h-32 rounded-xl bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        placeholder="Write your secret here ..."
        required
      />

      <button
        type="submit"
        className="w-full py-2.5 rounded-full bg-fuchsia-500 text-slate-950 text-sm font-medium"
      >
        Send secretly
      </button>

      {sent && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white px-6 py-3 rounded-full  shadow-xl text-sm font-semibold  animate-slide-up animate-pulse-soft" >
          Message sent!
        </div>
      )}
    </form>
  );
}
