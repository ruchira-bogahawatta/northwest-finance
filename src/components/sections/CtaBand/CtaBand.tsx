import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { site } from "@/lib/site";
import styles from "./CtaBand.module.css";

interface CtaBandProps {
  title?: string;
  text?: string;
}

export function CtaBand({
  title = "Ready when you are",
  text = "Have a chat with us about your next vehicle — no obligation, no pressure, just a straight answer.",
}: CtaBandProps) {
  return (
    <section className={styles.band} aria-labelledby="cta-heading">
      <Container className={styles.inner}>
        <div>
          <h2 id="cta-heading" className={styles.heading}>
            {title}
          </h2>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.actions}>
          <Button href="/contact" size="lg" variant="on-brand">
            Talk to us
          </Button>
          <a href={site.phoneHref} className={styles.phone}>
            or call {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
