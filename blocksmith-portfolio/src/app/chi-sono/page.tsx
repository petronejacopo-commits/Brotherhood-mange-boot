import { AboutSection } from "@/components/about/AboutSection";

export const metadata = {
  title: "Chi Sono | Jacopo Petrone",
  description: "Biografia e percorso di Jacopo Petrone, Fondatore e Backend Architect di Blocksmith Studio.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutSection />
    </div>
  );
}