import { BoltIcon, SolarIcon, ShieldIcon, GateIcon } from "@/components/icons/Icons";

const categories = [
  {
    id: "services-electrical",
    title: "Electrical Services",
    Icon: BoltIcon,
    items: ["Electrical installations", "Fault finding and repairs", "Maintenance and upgrades"],
  },
  {
    id: "services-solar",
    title: "Solar Solutions",
    Icon: SolarIcon,
    items: ["Solar system design", "Installation and commissioning", "Maintenance and system upgrades"],
  },
  {
    id: "services-security",
    title: "Security Systems",
    Icon: ShieldIcon,
    items: [
      "CCTV camera installation",
      "Alarm system installation and servicing",
      "Electric fence installation and maintenance",
    ],
  },
  {
    id: "services-automation",
    title: "Automation",
    Icon: GateIcon,
    items: ["Gate motor installation and repairs"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-navy px-6 py-24 text-white">
      <header className="mx-auto mb-14 max-w-[80rem] text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our Services</p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          A Comprehensive Range Of Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">
          We are dedicated to using quality materials and modern technology
          to ensure reliable and efficient service delivery.
        </p>
      </header>

      <ul className="mx-auto grid max-w-[80rem] gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map(({ id, title, Icon, items }) => (
          <li
            key={title}
            id={id}
            className="flex scroll-mt-24 flex-col gap-4 rounded-md border border-white/10 bg-navy-light p-7 transition-colors hover:border-gold/40"
          >
            <Icon className="h-9 w-9 text-gold" />
            <h3 className="text-lg font-bold">{title}</h3>
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-white/70">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
