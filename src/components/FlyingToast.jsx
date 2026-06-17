export default function FlyingToast({ show }) {
  if (!show) return null;

  return (
    <div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] toast-fly"
      style={{ width: "120px", height: "120px" }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-2xl"
        style={{ transform: "rotate(45deg)" }}
      >
        <polygon
          points="50,5 95,50 50,95 5,50"
          fill="url(#grad)"
          stroke="rgba(0,0,0,0.2)"
          strokeWidth="2"
        />

        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fuchsia" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        <text
          x="50"
          y="55"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fill="#0f0f0f"
          style={{ transform: "rotate(-45deg)", transformOrigin: "50% 50%" }}
        >
          Done!
        </text>
      </svg>
    </div>
  );
}
