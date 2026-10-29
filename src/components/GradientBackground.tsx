import PlasmaWave from "@/components/PlasmaWave";

export default function GradientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <PlasmaWave
        colors={["#7C3AED", "#22D3EE"]}
        speed={1}
        bend1={1}
        bend2={0.5}
        thickness={0.3}
        glow={1}
        core={0.6}
        opacity={1}
        mouseInteraction={true}
      />
      <div className="blob-drift-slow absolute -top-24 -left-24 h-80 w-80 sm:h-[26rem] sm:w-[26rem] rounded-full bg-violet opacity-35 blur-[120px]" />
      <div className="blob-drift-medium absolute top-1/3 -right-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem] rounded-full bg-blue opacity-30 blur-[120px]" />
      <div className="blob-drift-alt absolute -bottom-24 left-1/4 h-72 w-72 sm:h-[24rem] sm:w-[24rem] rounded-full bg-cyan opacity-25 blur-[120px]" />
    </div>
  );
}
