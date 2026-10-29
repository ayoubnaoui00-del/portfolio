import Galaxy from "@/components/Galaxy";

export default function GradientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <Galaxy
        density={1}
        glowIntensity={0.3}
        flareIntensity={1}
        starSpeed={0.5}
        transparent={false}
        backgroundColor="#0B0B14"
        mouseRepulsion
        clickWarp
      />
    </div>
  );
}
