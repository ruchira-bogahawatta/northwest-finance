import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: ReactNode;
  intro?: ReactNode;
  /** Centre the block (used on full-width feature sections). */
  align?: "start" | "center";
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h2" | "h3";
  id?: string;
}

export function SectionHeading({
  title,
  intro,
  align = "start",
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <div className={`${styles.wrap} ${align === "center" ? styles.center : ""}`}>
      <Tag id={id} className={styles.title}>
        {title}
      </Tag>
      {intro ? <p className={styles.intro}>{intro}</p> : null}
    </div>
  );
}
