import { HeroSection } from "@/components/home/HeroSection";
import { TechStack } from "@/components/home/TechStack";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <TechStack />
      <RoadmapSection />
      <ContactSection />
    </div>
  );
}