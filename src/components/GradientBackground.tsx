import Galaxy from "@/components/Galaxy";

export default function GradientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <Galaxy
        starColors={["#F5F5FA", "#D4D4D8", "#A1A1AA"]}
        density={1}
        glowIntensity={0.25}
        flareIntensity={0.8}
        starSpeed={0.5}
        transparent={false}
        backgroundColor="#0B0B10"
        mouseRepulsion
        clickWarp
      />
    </div>
  );
}
