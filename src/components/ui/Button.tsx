import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-lime text-forest border border-lime hover:bg-lime-dim hover:border-lime-dim hover:shadow-[0_0_32px_-6px_rgba(179,224,46,0.55)]",
  secondary:
    "bg-transparent text-sage border border-sage-dim/60 hover:border-lime hover:text-lime",
  ghost:
    "bg-transparent text-sage border-0 underline decoration-sage-dim/60 underline-offset-4 hover:text-lime hover:decoration-lime",
};

const baseClasses =
  "notch inline-flex items-center justify-center gap-2 px-6 py-3 font-mono-tech text-xs font-medium uppercase tracking-[0.12em] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime disabled:cursor-not-allowed disabled:opacity-50";

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {props.children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {props.children}
    </button>
  );
}
