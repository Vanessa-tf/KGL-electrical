import type { Metadata } from "next";
import About from "@/components/About";
import Values from "@/components/Values";

export const metadata: Metadata = {
  title: "About Us | KGL Electrical",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Values />
    </>
  );
}
