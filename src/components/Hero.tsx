import Image from "next/image";
import TypedText from "@/components/TypedText";
import { BoltIcon, SolarIcon, ShieldIcon } from "@/components/icons/Icons";

const blurbs = [
  {
    Icon: BoltIcon,
    title: "Electrical Installations",
    desc: "Installations, fault finding, repairs and maintenance for every property type.",
  },
  {
    Icon: SolarIcon,
    title: "Solar & Energy",
    desc: "Solar system design, installation, commissioning and ongoing upgrades.",
  },
  {
    Icon: ShieldIcon,
    title: "Security & Automation",
    desc: "CCTV, alarms, electric fencing and gate motor installation and repairs.",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy px-6 pb-20 pt-16 text-white">
      <Image
        src="/images/hero-roof-worker.webp"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="absolute inset-0 -z-20 object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 -z-10 bg-navy/55" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/20 to-navy/45" aria-hidden="true" />

      <div className="mx-auto flex max-w-[80rem] flex-col gap-14 lg:flex-row lg:items-center">
        <article className="lg:w-3/5">
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
            We Are <em className="not-italic text-gold">KGL Electrical</em>
          </h1>
          <p className="mt-5 min-h-[2.5rem] text-xl font-semibold text-white/70">
            <TypedText />
          </p>
          <a
            href="#about"
            className="mt-8 inline-block rounded-sm bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-gold-light"
          >
            More About KGL
          </a>
        </article>

        <ul className="flex flex-col gap-8 border-t border-white/10 pt-10 lg:w-2/5 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          {blurbs.map(({ Icon, title, desc }) => (
            <li key={title} className="flex gap-4">
              <Icon className="h-9 w-9 shrink-0 text-gold" />
              <div>
                <h2 className="text-base font-bold">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
