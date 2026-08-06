import Image from "next/image";

const photos = [
  { src: "/images/work-hardhat-panels.jpg", alt: "Hard hat resting on an installed solar panel array", position: "object-left" },
  { src: "/images/work-indoor-install.webp", alt: "KGL technicians wiring a ceiling fan and light fitting", position: "object-center" },
  { src: "/images/work-roof-silhouette.webp", alt: "Technicians securing panel mounts on a rooftop at sunset", position: "object-center" },
  { src: "/images/work-container-solar.webp", alt: "Technician installing a solar panel on a site container roof", position: "object-bottom" },
  { src: "/images/work-powerstation-portrait.webp", alt: "KGL technician on site near a power station", position: "object-top" },
];

export default function Gallery() {
  return (
    <section id="work" className="bg-offwhite px-6 py-24">
      <header className="mx-auto mb-14 max-w-[80rem] text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our Work</p>
        <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
          On Site, Doing The Job Right
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">
          Real installations, repairs and solar work carried out by the KGL
          Electrical team across South Africa.
        </p>
      </header>

      <ul className="mx-auto grid max-w-[80rem] grid-cols-2 gap-4 sm:grid-cols-3">
        {photos.map((photo) => (
          <li
            key={photo.src}
            className="group relative aspect-square overflow-hidden rounded-md border border-navy/10"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={`object-cover ${photo.position} transition-transform duration-500 group-hover:scale-105`}
              sizes="(min-width: 640px) 33vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </li>
        ))}
      </ul>
    </section>
  );
}
