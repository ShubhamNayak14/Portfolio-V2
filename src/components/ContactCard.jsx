"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import BadgeButton from "./ui/badge-button";

export default function ContactSection() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendEmail = (e) => {
    e?.preventDefault();
    if (!formRef.current || !isFormValid) return;

    setIsSending(true);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setMessageStatus("success");
        setIsSending(false);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setMessageStatus(null), 4000);
      },
      () => {
        setMessageStatus("error");
        setIsSending(false);
        setTimeout(() => setMessageStatus(null), 4000);
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const isValid =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "";
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <>
   <div className="w-full flex items-center justify-center lg:pt-[100px] pt-[30px] transition-all duration-500">
  <BadgeButton />
</div>

      <div className="relative w-full flex justify-center items-center px-4 sm:px-6 py-32 overflow-hidden">
        {/* Background Text */}
        <h1
          className="absolute top-15 sm:top-24 lg:top-35 -translate-y-[60%] left-1/2 -translate-x-1/2 text-[75px] sm:text-[100px] md:text-[180px] lg:text-[240px] font-extrabold uppercase text-neutral-800 dark:text-neutral-800 opacity-70 select-none pointer-events-none leading-none tracking-tight whitespace-nowrap"
          aria-hidden="true"
        >
          LET&apos;S TALK
        </h1>

        {/* Contact Card */}
        <div className="relative w-full max-w-5xl grid md:grid-cols-2 gap-8 rounded-xl p-6 md:p-10 border border-neutral-300 dark:border-neutral-800 shadow-lg bg-white dark:bg-[#111] transition-colors duration-300">
          {/* Left */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3">
              Let&apos;s connect
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-5 text-sm md:text-base leading-relaxed">
              Have a project in mind? Drop me a line. <br />
              I&apos;m currently available for new opportunities.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                Find me on
              </span>
              <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-1.5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
              >
                <FaGithub aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1.5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-1.5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
              >
                <FaTwitter aria-hidden="true" />
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 blur-[1px] animate-ping" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
              </span>
              <span className="text-xs md:text-sm text-green-600 dark:text-green-400">
                Available for work
              </span>
            </div>
          </div>

          {/* Right - Form */}
          <form
            ref={formRef}
            onSubmit={handleSendEmail}
            className="flex flex-col gap-3 text-sm md:text-base"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-3 py-2 rounded-md bg-transparent border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500 caret-orange-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full px-3 py-2 rounded-md bg-transparent border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500 caret-orange-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={3}
              required
              className="w-full px-3 py-2 rounded-md bg-transparent border border-neutral-300 dark:border-neutral-700 text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500 resize-none caret-orange-500"
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
                No spam, just a reply to your message.
              </p>

              {/*  Animated Send Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSending}
                className={`flex items-center justify-center gap-2 px-8 py-2 rounded-full text-white font-medium transition-all duration-500 ${
                  messageStatus === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : isFormValid && !isSending
                    ? "bg-black hover:bg-neutral-800 shadow-md"
                    : "bg-neutral-700 cursor-not-allowed opacity-70"
                }`}
              >
                {isSending ? (
                  <span className="animate-spin border-2 border-t-transparent border-white rounded-full w-4 h-4"></span>
                ) : messageStatus === "success" ? (
                  <FaCheck className="text-white text-lg transition-transform duration-300 scale-110" />
                ) : (
                  <LiaTelegramPlane className="text-white text-xl transition-transform duration-300 hover:translate-x-1" />
                )}
                {messageStatus === "success"
                  ? "Sent"
                  : isSending
                  ? "Sending..."
                  : "Send"}
              </button>
            </div>

            {messageStatus === "success" && (
              <p className="text-green-500 text-sm mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {messageStatus === "error" && (
              <p className="text-red-500 text-sm mt-2">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
