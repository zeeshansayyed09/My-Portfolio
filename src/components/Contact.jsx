import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import twitterLogo from "../assets/twitter-logo3.webp";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-2 py-16 sm:py-24 md:py-32 lg:py-40 px-2 flex justify-center"
    >
      <div className="glass-effect w-full max-w-6xl rounded-3xl border border-white/10 p-5 sm:p-6 md:p-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* Left */}
          <div className="lg:w-2/5">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-400 leading-7 mb-10">
              Have a project in mind or just want to say hello? Feel free to
              send me a message. I'm always open to discussing new opportunities.
            </p>

            <div className="flex gap-5">
              <a
                href="https://github.com/zeeshansayyed09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
              >
                <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/zeeshan-sayyed-b3388b353/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" />
              </a>

              <a
                href="https://x.com/ZeeshanSay2863"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
              >
                <img src={twitterLogo} alt="X" className="w-6 h-6" />
              </a>
            </div>

            <a
              href="/cv.pdf"
              download
              className="mt-10 inline-block px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
            >
              Download CV
            </a>
          </div>

          {/* Right */}
          <div className="lg:w-3/5">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-transparent border border-gray-600 rounded-xl px-5 py-3 outline-none focus:border-blue-500 transition"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-transparent border border-gray-600 rounded-xl px-5 py-3 outline-none focus:border-blue-500 transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="w-full bg-transparent border border-gray-600 rounded-xl px-5 py-3 outline-none resize-none focus:border-blue-500 transition"
              />

              {status === "success" && (
                <p className="text-green-400 text-sm">
                  ✓ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  ✗ Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;