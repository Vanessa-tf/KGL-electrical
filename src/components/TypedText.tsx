"use client";

import { useEffect, useState } from "react";

const DEFAULT_PHRASES = [
  "... but everyone calls us KGL.",
  "Reliable power, sustainable future.",
  "The team that keeps you switched on.",
];

export default function TypedText({
  phrases = DEFAULT_PHRASES,
  className,
}: {
  phrases?: string[];
  className?: string;
}) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      },
      deleting ? 28 : 45,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="typed-cursor" aria-hidden="true" />
    </span>
  );
}
