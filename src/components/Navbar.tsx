"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BoltIcon, PhoneIcon, ChevronDownIcon } from "@/components/icons/Icons";

const serviceLinks = [
  { href: "#services-electrical", label: "Electrical Services" },
  { href: "#services-solar", label: "Solar Solutions" },
  { href: "#services-security", label: "Security Systems" },
  { href: "#services-automation", label: "Automation" },
];

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#vision-mission", label: "Vision & Mission" },
  { href: "#structure", label: "Structure" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg shadow-black/20">
      <nav className="mx-auto flex max-w-[80rem] items-center justify-between gap-4 px-6 py-4">
        <Link href="#top" className="flex items-center">
          <Image
            src="/images/logo-full.png"
            alt="KGL Electrical"
            width={150}
            height={54}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          <li>
            <a href="#top" className="text-xs font-bold uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-gold">
              Home
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-gold"
            >
              Services
              <ChevronDownIcon className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <ul className="absolute left-0 top-full flex w-56 flex-col gap-1 rounded-sm border border-white/10 bg-navy-light py-2 shadow-xl">
                {serviceLinks.map((service) => (
                  <li key={service.href}>
                    <a
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-gold"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {links.slice(1).map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-xs font-bold uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-gold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+27782943837"
          className="hidden items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-gold-light lg:flex"
        >
          <PhoneIcon className="h-4 w-4" />
          078 294 3837
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
        >
          <BoltIcon className="h-5 w-5 text-gold" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-navy px-6 py-4 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <p className="px-2 pt-2 text-xs font-bold uppercase tracking-widest text-gold">Services</p>
          </li>
          {serviceLinks.map((service) => (
            <li key={service.href}>
              <a
                href={service.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-4 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-gold"
              >
                {service.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:+27782943837"
              className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-bold text-navy"
            >
              <PhoneIcon className="h-4 w-4" />
              078 294 3837
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
