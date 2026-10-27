export default function GradientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="blob-drift-slow absolute -top-24 -left-24 h-80 w-80 sm:h-[26rem] sm:w-[26rem] rounded-full bg-violet opacity-50 blur-[120px]" />
      <div className="blob-drift-medium absolute top-1/3 -right-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem] rounded-full bg-blue opacity-45 blur-[120px]" />
      <div className="blob-drift-alt absolute -bottom-24 left-1/4 h-72 w-72 sm:h-[24rem] sm:w-[24rem] rounded-full bg-cyan opacity-40 blur-[120px]" />
    </div>
  );
}

