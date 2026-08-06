import Image from "next/image";
import { PinIcon, PhoneIcon, MailIcon } from "@/components/icons/Icons";

const quickLinks = [
  { href: "#services-electrical", label: "Electrical Services" },
  { href: "#services-solar", label: "Solar Solutions" },
  { href: "#services-security", label: "Security Systems" },
  { href: "#services-automation", label: "Automation" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <article className="mx-auto grid max-w-[80rem] gap-10 border-t border-white/10 px-6 py-14 sm:grid-cols-3">
        <section className="flex flex-col gap-3">
          <Image
            src="/images/logo-full.png"
            alt="KGL Electrical"
            width={150}
            height={54}
            className="h-9 w-[100px] object-contain object-left"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Professional electrical and energy solutions designed for
            homes, businesses and industries across South Africa.
          </p>
        </section>

        <address className="flex flex-col gap-3 not-italic">
          <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Our Office
          </h2>
          <p className="flex items-start gap-2.5 text-sm text-white/70">
            <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            Middelburg, Mpumalanga, South Africa
          </p>
          <p className="flex items-center gap-2.5 text-sm text-white/70">
            <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
            <a href="tel:+27782943837" className="hover:text-gold">078 294 3837</a>
          </p>
          <p className="flex items-center gap-2.5 text-sm text-white/70">
            <MailIcon className="h-4 w-4 shrink-0 text-gold" />
            <a href="mailto:KGLelectrical@gmail.com" className="hover:text-gold">
              KGLelectrical@gmail.com
            </a>
          </p>
        </address>

        <nav aria-label="Quick links">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </h2>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </article>

      <p className="bg-gold px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.2em] text-navy">
        Residential &bull; Commercial &bull; Industrial
      </p>

      <p className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} KGL Electrical. All rights reserved.
      </p>
    </footer>
  );
}
