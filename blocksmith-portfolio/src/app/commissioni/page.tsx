import { CommissionsSection } from "@/components/commissions/CommissionsSection";

export const metadata = {
  title: "Commissioni | Blocksmith Studio",
  description: "Servizi e soluzioni su misura per il tuo progetto: UX/UI Design, Lore Design e Social Media Management.",
};

export default function CommissionsPage() {
  return (
    <div className="w-full">
      <CommissionsSection />
    </div>
  );
}