export default function Divider() {
  return (
    <div className="relative h-8 w-full overflow-hidden">
      <div
        className="absolute left-0 right-0 top-1/2 h-[2px]"
        style={{
          background: "linear-gradient(to right, #C0C0C0, transparent)",
          transform: "skewY(-2deg)",
        }}
      />
    </div>
  );
}
