import Link from "next/link";

const base = "inline-block font-heading uppercase tracking-wider px-7 py-3.5 transition";

const variants = {
  primary: "bg-primary text-white hover:brightness-110",
  secondary: "border-2 border-white text-white hover:bg-white hover:text-background",
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isExternal = href?.startsWith("http") || href?.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
