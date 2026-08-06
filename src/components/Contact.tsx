"use client";

import { useState, type FormEvent } from "react";
import { PhoneIcon, PinIcon, MailIcon, WhatsAppIcon } from "@/components/icons/Icons";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-navy px-6 py-24 text-white">
      <article className="mx-auto grid max-w-[80rem] gap-10 lg:grid-cols-5">
        <section className="flex flex-col gap-6 lg:col-span-2">
          <header>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our Office</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Get In Touch</h2>
          </header>

          <address className="flex flex-col gap-4 not-italic">
            <p className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <strong className="font-semibold text-white/90">
                Middelburg, Mpumalanga, South Africa
              </strong>
            </p>
            <p className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 shrink-0 text-gold" />
              <a href="tel:+27782943837" className="font-semibold text-white/90 hover:text-gold">
                078 294 3837
              </a>
            </p>
            <p className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 shrink-0 text-gold" />
              <a href="mailto:KGLelectrical@gmail.com" className="font-semibold text-white/90 hover:text-gold">
                KGLelectrical@gmail.com
              </a>
            </p>
          </address>

          <p className="rounded-md border border-white/10 bg-navy-light px-5 py-4 text-sm leading-relaxed text-white/70">
            Services Area: Nationwide, depending on project scope.
          </p>

          <a
            href="https://wa.me/27782943837"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with KGL Electrical on WhatsApp"
            className="flex w-fit items-center gap-2 rounded-sm border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/75 hover:border-gold hover:text-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </section>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-md border border-white/10 bg-navy-light p-8 lg:col-span-3"
        >
          <label className="flex flex-col gap-1.5 text-sm font-semibold text-white/85">
            Name
            <input
              required
              type="text"
              name="name"
              placeholder="Your full name"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-normal text-white outline-none placeholder:text-white/40 focus:border-gold"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold text-white/85">
            Email
            <input
              required
              type="email"
              name="email"
              placeholder="you@example.com"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-normal text-white outline-none placeholder:text-white/40 focus:border-gold"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold text-white/85">
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="078 000 0000"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-normal text-white outline-none placeholder:text-white/40 focus:border-gold"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold text-white/85">
            Service Interested In
            <select
              name="serviceInterested"
              defaultValue=""
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-normal text-white outline-none focus:border-gold"
            >
              <option value="" disabled className="text-navy">Select a service</option>
              <option value="Electrical Services" className="text-navy">Electrical Services</option>
              <option value="Solar Solutions" className="text-navy">Solar Solutions</option>
              <option value="Security Systems" className="text-navy">Security Systems</option>
              <option value="Automation" className="text-navy">Automation</option>
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold text-white/85">
            Message
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Tell us about your project"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-normal text-white outline-none placeholder:text-white/40 focus:border-gold"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-gold-light disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm font-semibold text-green-400">
              Thanks! Your message has been sent, we&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-semibold text-red-400">
              Something went wrong. Please call us directly at 078 294 3837.
            </p>
          )}
        </form>
      </article>
    </section>
  );
}
