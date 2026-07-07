const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const PATHS = {
  alignment: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </>
  ),
  suspension: (
    <>
      <line x1="12" y1="2" x2="12" y2="6" />
      <path d="M8 6 L16 6 L8 9 L16 9 L8 12 L16 12 L8 15 L16 15 L8 18 L16 18" />
      <line x1="12" y1="18" x2="12" y2="22" />
    </>
  ),
  brakes: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="12" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  "timing-belt": (
    <>
      <circle cx="7" cy="16" r="4" />
      <circle cx="17" cy="8" r="4" />
      <line x1="4.2" y1="13.2" x2="14.2" y2="5.2" />
      <line x1="9.8" y1="18.8" x2="19.8" y2="10.8" />
    </>
  ),
  oil: (
    <path d="M12 2C12 2 6 10.5 6 15a6 6 0 0 0 12 0C18 10.5 12 2 12 2Z" />
  ),
  steering: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" />
      <line x1="12" y1="3" x2="12" y2="9.5" />
      <line x1="5.5" y1="16" x2="10" y2="13.5" />
      <line x1="18.5" y1="16" x2="14" y2="13.5" />
    </>
  ),
  "engine-tune": (
    <>
      <circle cx="12" cy="13" r="8" />
      <line x1="12" y1="13" x2="16" y2="8" />
      <line x1="6" y1="13" x2="8" y2="13" />
      <line x1="12" y1="5" x2="12" y2="7" />
      <line x1="18" y1="13" x2="16" y2="13" />
    </>
  ),
  "rack-pinion": (
    <>
      <circle cx="7" cy="12" r="4" />
      <line x1="7" y1="6" x2="7" y2="8" />
      <line x1="7" y1="16" x2="7" y2="18" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="4.2" y1="9.2" x2="5.6" y2="10.6" />
      <line x1="8.4" y1="13.4" x2="9.8" y2="14.8" />
      <line x1="4.2" y1="14.8" x2="5.6" y2="13.4" />
      <line x1="8.4" y1="10.6" x2="9.8" y2="9.2" />
      <line x1="13" y1="18" x2="23" y2="18" />
      <line x1="15" y1="18" x2="15" y2="21" />
      <line x1="18" y1="18" x2="18" y2="21" />
      <line x1="21" y1="18" x2="21" y2="21" />
    </>
  ),
  radiator: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="1" />
      <line x1="7" y1="5" x2="7" y2="19" />
      <line x1="10" y1="5" x2="10" y2="19" />
      <line x1="13" y1="5" x2="13" y2="19" />
      <line x1="16" y1="5" x2="16" y2="19" />
      <line x1="9" y1="2" x2="9" y2="5" />
      <line x1="15" y1="19" x2="15" y2="22" />
    </>
  ),
  wrench: (
    <>
      <line x1="6" y1="18" x2="18" y2="6" strokeWidth={2.5} />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="6" r="3" />
    </>
  ),
};

export default function ServiceIcon({ name, className = "w-10 h-10 text-primary" }) {
  const content = PATHS[name];
  if (!content) return null;
  return (
    <svg {...common} className={className}>
      {content}
    </svg>
  );
}
