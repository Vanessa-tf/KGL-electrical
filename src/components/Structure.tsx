const roles = [
  "Director / Owner",
  "Operations & Technical Services",
  "Installations & Maintenance Team",
  "Administration & Customer Support",
];

export default function Structure() {
  return (
    <section id="structure" className="bg-navy px-6 py-24 text-white">
      <article className="mx-auto flex max-w-[80rem] flex-col gap-10 lg:flex-row lg:items-start">
        <header className="lg:w-1/3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Structure</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            How We&apos;re Organized
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            KGL Electrical operates with a simple and effective
            organizational structure to ensure efficiency and
            accountability. We also collaborate with skilled professionals
            and partners when required to deliver larger or specialized
            projects.
          </p>
        </header>

        <ol className="flex flex-1 flex-col gap-4">
          {roles.map((role, index) => (
            <li key={role} className="flex items-center gap-5 rounded-md border border-white/10 bg-navy-light px-6 py-5">
              <p className="text-2xl font-extrabold text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-semibold">{role}</h3>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
}
