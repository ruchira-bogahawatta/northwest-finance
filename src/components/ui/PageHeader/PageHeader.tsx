import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container/Container";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  intro?: ReactNode;
}

/** Compact page-intro band for inner pages. */
export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <Container size="narrow" className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        {intro ? <p className={styles.intro}>{intro}</p> : null}
      </Container>
    </section>
  );
}
