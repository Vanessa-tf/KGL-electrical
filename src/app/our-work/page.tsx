import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Our Work | KGL Electrical",
};

export default function OurWorkPage() {
  return (
    <>
      <Gallery />
    </>
  );
}
