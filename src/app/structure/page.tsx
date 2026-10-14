import type { Metadata } from "next";
import Structure from "@/components/Structure";

export const metadata: Metadata = {
  title: "Structure | KGL Electrical",
};

export default function StructurePage() {
  return (
    <>
      <Structure />
    </>
  );
}
