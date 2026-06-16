import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  /** Surface treatment. "brand" is the deep-blue band used sparingly. */
  variant?: "default" | "surface" | "brand";
  /** Tighten or loosen the default vertical rhythm. */
  spacing?: "default" | "tight" | "loose";
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

/** A full-width horizontal band that owns vertical rhythm and background colour. */
export function Section({
  children,
  variant = "default",
  spacing = "default",
  id,
  className,
  ...aria
}: SectionProps) {
  const classes = [styles.section, styles[variant], styles[spacing], className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes} {...aria}>
      {children}
    </section>
  );
}
