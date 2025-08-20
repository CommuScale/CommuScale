// Simplified static background - no expensive scroll animations
export default function ScrollColorTransition() {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950" />
  );
}
