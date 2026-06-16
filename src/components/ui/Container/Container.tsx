import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  /** Render as a different element (e.g. "header", "section"). Defaults to div. */
  as?: ElementType;
  /** Narrower max-width for text-heavy or focused content. */
  size?: "default" | "narrow";
  className?: string;
}

/** Centres content and applies the page gutter. The horizontal rhythm of the site. */
export function Container({
  children,
  as: Tag = "div",
  size = "default",
  className,
}: ContainerProps) {
  const classes = [styles.container, size === "narrow" && styles.narrow, className]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
