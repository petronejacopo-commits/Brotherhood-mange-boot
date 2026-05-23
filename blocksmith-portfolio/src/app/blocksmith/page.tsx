import { BlocksmithSection } from "@/components/blocksmith/BlocksmithSection";

export const metadata = {
  title: "Blocksmith Studio | The Forge",
  description: "La storia, il manifesto e il modello operativo di Blocksmith Studio.",
};

export default function BlocksmithPage() {
  return (
    <div className="w-full">
      <BlocksmithSection />
    </div>
  );
}