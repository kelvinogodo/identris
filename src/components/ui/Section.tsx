import type { HTMLAttributes } from "react";
import { Container } from "./Container";

type Tone = "dark" | "light";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: Tone;
  containerClassName?: string;
  /** First section of a page: stagger in on load instead of on scroll. */
  intro?: boolean;
};

const toneClasses: Record<Tone, string> = {
  dark: "bg-forest text-sage",
  light: "bg-sage text-forest",
};

export function Section({
  tone = "dark",
  className = "",
  containerClassName = "",
  intro = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 md:py-24 ${toneClasses[tone]} ${className}`}
      {...props}
    >
      <Container
        className={`${intro ? "intro" : "reveal-block"} ${containerClassName}`}
      >{children}</Container>
    </section>
  );
}
