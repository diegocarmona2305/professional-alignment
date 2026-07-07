const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const PATHS = {
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="10" y1="18" x2="14" y2="18" />
    </>
  ),
  chat: <path d="M4 5H20V15H10L5 19V15H4Z" />,
  pin: (
    <>
      <path d="M12 22C12 22 19 14.5 19 9A7 7 0 0 0 5 9C5 14.5 12 22 12 22Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="7" x2="12" y2="12" />
      <line x1="12" y1="12" x2="16" y2="14" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="10" y1="8" x2="10" y2="16" />
      <line x1="10" y1="8" x2="15" y2="8" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="10" r="6" />
      <polyline points="9,10 11.5,12.5 15,7.5" />
      <line x1="9" y1="16" x2="7" y2="21" />
      <line x1="15" y1="16" x2="17" y2="21" />
    </>
  ),
  diagnostic: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <polyline points="6,10 9,10 11,6 13,14 15,10 18,10" />
      <line x1="9" y1="19" x2="15" y2="19" />
      <line x1="12" y1="16" x2="12" y2="19" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3L19 6L19 12L12 21L5 12L5 6Z" />
      <polyline points="9,12 11,14 15,9" />
    </>
  ),
  bolt: <polygon points="12,2 4,14 11,14 9,22 20,9 12,9" />,
};

export default function Icon({ name, className = "w-6 h-6 text-primary" }) {
  const content = PATHS[name];
  if (!content) return null;
  return (
    <svg {...common} className={className}>
      {content}
    </svg>
  );
}
