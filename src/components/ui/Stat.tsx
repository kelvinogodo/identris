type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "text-3xl md:text-4xl",
  md: "text-4xl md:text-5xl",
  lg: "text-6xl md:text-7xl",
};

export function Stat({
  label,
  value,
  size = "md",
  className = "",
}: {
  label: string;
  value: string;
  size?: Size;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-sage-dim">
        {label}
      </dt>
      <dd
        className={`mt-1 font-heading font-semibold leading-none text-lime ${sizeClasses[size]}`}
      >
        {value}
      </dd>
    </div>
  );
}
