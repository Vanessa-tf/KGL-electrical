export default function VisionMission() {
  return (
    <section id="vision-mission" className="bg-offwhite px-6 py-24">
      <header className="mx-auto mb-14 max-w-[80rem] text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Vision &amp; Mission</p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
          Where We&apos;re Headed
        </h2>
      </header>

      <ul className="mx-auto grid max-w-[80rem] gap-6 lg:grid-cols-2">
        <li className="rounded-md bg-navy p-9 text-white">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gold">Vision</h3>
          <p className="mt-4 text-xl font-semibold leading-relaxed">
            To become a leading electrical and energy solutions provider
            recognized for excellence, innovation, and customer
            satisfaction.
          </p>
        </li>
        <li className="rounded-md border border-navy/10 bg-white p-9 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gold">Mission</h3>
          <p className="mt-4 text-xl font-semibold leading-relaxed text-navy">
            To deliver high-quality electrical and solar solutions through
            skilled workmanship, reliable service, and a strong commitment
            to safety and customer needs.
          </p>
        </li>
      </ul>
    </section>
  );
}
