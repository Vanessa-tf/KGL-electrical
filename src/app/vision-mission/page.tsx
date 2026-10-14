import type { Metadata } from "next";
import VisionMission from "@/components/VisionMission";

export const metadata: Metadata = {
  title: "Vision & Mission | KGL Electrical",
};

export default function VisionMissionPage() {
  return (
    <>
      <VisionMission />
    </>
  );
}
