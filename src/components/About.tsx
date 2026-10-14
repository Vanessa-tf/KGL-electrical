import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";

const stats = [
  { target: 100, suffix: "%", label: "Locally Based" },
  { target: 3, suffix: "", label: "Client Sectors Served" },
];

export default function About() {
  return (
    <section id="about" className="bg-offwhite px-6 py-24">
      <article className="mx-auto flex max-w-[80rem] flex-col gap-10 lg:flex-row lg:items-start">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-navy/10 shadow-lg lg:w-1/3">
          <Image
            src="/images/about-roof-worker.webp"
            alt="A KGL Electrical technician working on a rooftop solar installation"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>

        <section className="flex flex-col gap-6 lg:w-2/3">
          <header>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">About Us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              About KGL Electrical
            </h2>
          </header>

          <div className="flex flex-col gap-5">
            <p className="leading-relaxed text-ink/80">
              KGL Electrical is a professional electrical services company
              based in South Africa, specializing in a wide range of
              residential, commercial, and industrial solutions. The company
              is committed to delivering reliable, efficient, and high-quality
              electrical services tailored to meet client needs.
            </p>
            <p className="leading-relaxed text-ink/80">
              Founded with a vision to provide modern and sustainable
              solutions, KGL Electrical has built its reputation in areas such
              as solar system installations, security systems, and general
              electrical services. We combine technical expertise with
              practical experience to ensure every project is completed
              safely and to the highest standard.
            </p>
            <p className="leading-relaxed text-ink/80">
              We pride ourselves on professionalism, customer satisfaction,
              and delivering solutions that are both cost-effective and
              long-lasting.
            </p>
          </div>

          <Link
            href="/contact"
            className="w-fit rounded-sm bg-navy px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-light"
          >
            Work With Us
          </Link>

          <ul className="mt-4 grid gap-8 border-t border-navy/10 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <li key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-navy">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ink/60">
                  {stat.label}
                </p>
              </li>
            ))}
            <li className="text-center">
              <p className="text-4xl font-extrabold text-navy">24/7</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ink/60">
                Support Availability
              </p>
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
}
