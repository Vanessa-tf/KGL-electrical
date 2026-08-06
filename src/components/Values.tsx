const values = [
  { title: "Safety", text: "We prioritize safety in all our operations and ensure compliance with industry standards." },
  { title: "Integrity", text: "We conduct our business with honesty, transparency, and professionalism." },
  { title: "Quality", text: "We deliver high-standard workmanship using trusted products and techniques." },
  { title: "Customer Focus", text: "We aim to exceed customer expectations through reliable and efficient service." },
  { title: "Innovation", text: "We embrace modern technology and continuously improve our solutions." },
  { title: "Teamwork", text: "We believe in collaboration to achieve the best results for our clients." },
];

export default function Values() {
  return (
    <section id="values" className="bg-white px-6 py-24">
      <header className="mx-auto mb-14 max-w-[80rem] text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Values</p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
          What Guides Our Work
        </h2>
      </header>

      <ul className="mx-auto grid max-w-[80rem] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map(({ title, text }, index) => (
          <li key={title} className="rounded-md border border-navy/10 bg-offwhite p-7">
            <p className="text-3xl font-extrabold text-gold">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-lg font-bold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
