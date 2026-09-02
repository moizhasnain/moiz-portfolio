"use client";

import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { contact } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-24">
      <div className="container-content grid grid-cols-1 gap-16 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            Let's work together
          </h2>
          <p className="mt-4 max-w-[46ch] text-muted">
            Open to senior SEO roles and new client engagements. Reach out
            directly or send a message.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              <a href={`mailto:${contact.email}`} className="text-[15px] text-text hover:text-accent">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`} className="text-[15px] text-text hover:text-accent">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={18} className="text-accent" />
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-text hover:text-accent"
              >
                linkedin.com/in/moiz-hasnain
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-accent" />
              <span className="text-[15px] text-text">{contact.location}</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-md border border-line bg-surface px-4 py-3 text-[15px] text-text outline-none focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-md border border-line bg-surface px-4 py-3 text-[15px] text-text outline-none focus:border-accent"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full rounded-md border border-line bg-surface px-4 py-3 text-[15px] text-text outline-none focus:border-accent"
              placeholder="Tell me about your project or role"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accentSoft"
          >
            Send message
          </button>
          {sent && (
            <p className="text-sm text-emerald-400">
              Opening your email client to send this message to {contact.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
