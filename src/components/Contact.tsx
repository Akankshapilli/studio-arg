"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fields = [
    {
      label: "Your Name",
      name: "name",
      type: "text",
      placeholder: "Full Name",
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "your@email.com",
    },
    {
      label: "Project Type",
      name: "projectType",
      type: "text",
      placeholder: "Residential / Commercial / Other",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#F6F1E9] px-8 md:px-16 py-28"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.32em] uppercase text-[#B08D57] mb-4 flex items-center gap-3"
          >
            Let&apos;s Connect <span className="block w-8 h-px bg-[#B08D57]" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,4vw,54px)] font-light leading-[1.15] text-[#1A1A1A] mb-6"
          >
            Start a<br />
            <em className="italic text-[#B08D57]">Conversation</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-jost)] text-[15px] font-light leading-[1.85] text-[#5C5751] mb-12"
          >
            Every great space begins with a great conversation. Whether you have
            a project in mind or simply want to explore possibilities, we&apos;d
            love to hear from you.
          </motion.p>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6 mb-10"
          >
            {[
              { label: "Email", value: "info@studioarg.in", icon: "✉" },
              { label: "Phone", value: "+91 88855 08822", icon: "✆" },
              { label: "Studio", value: "Hyderabad, India", icon: "◎" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#B08D57]/30 flex items-center justify-center text-[#B08D57] text-sm flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] uppercase text-[#B08D57] mb-0.5">
                    {item.label}
                  </div>
                  <div className="font-[family-name:var(--font-cormorant)] text-[17px] text-[#1A1A1A]">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-3"
          >
            {[
              {
                name: "Instagram",
                link: "https://www.instagram.com/studioarg.design",
              },
              {
                name: "LinkedIn",
                link: "https://linkedin.com/in/yourusername",
              },
              { name: "Pinterest", link: "https://pinterest.com/yourusername" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.15em] uppercase px-4 py-2.5 border border-[#5C5751]/25 text-[#5C5751] hover:border-[#B08D57] hover:text-[#B08D57] transition-colors duration-300"
              >
                {s.name}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-7"
        >
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.22em] uppercase text-[#5C5751]">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="bg-transparent border-b border-[#5C5751]/30 pb-3 font-[family-name:var(--font-jost)] text-[14px] font-light text-[#1A1A1A] placeholder:text-[#5C5751]/40 focus:outline-none focus:border-[#B08D57] transition-colors"
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.22em] uppercase text-[#5C5751]">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your project..."
              required
              className="bg-transparent border-b border-[#5C5751]/30 pb-3 font-[family-name:var(--font-jost)] text-[14px] font-light text-[#1A1A1A] placeholder:text-[#5C5751]/40 focus:outline-none focus:border-[#B08D57] transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p className="font-[family-name:var(--font-jost)] text-[12px] text-red-500 -mt-3">
              Something went wrong. Please try again or email us directly at
              info@studioarg.in
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="self-start font-[family-name:var(--font-jost)] text-[11px] tracking-[0.22em] uppercase bg-[#1A1A1A] text-[#F6F1E9] px-10 py-4 hover:bg-[#B08D57] transition-colors duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message Sent ✓"}
            {status === "error" && "Try Again"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
