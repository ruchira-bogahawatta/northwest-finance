import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import styles from "./PhotoBand.module.css";

export function PhotoBand() {
  return (
    <section className={styles.band} aria-labelledby="band-heading">
      <Image
        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80"
        alt="A driver at the wheel of their car at dusk, city lights glowing on the road ahead."
        fill
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.scrim} aria-hidden="true" />
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h2 id="band-heading" className={styles.heading}>
            The car is the exciting part. We&apos;ll take the worry out of the rest.
          </h2>
          <p className={styles.text}>
            Whether it&apos;s your first car, a bigger one for a growing family, or a
            replacement after the last one gave up — we&apos;ll find finance that fits
            your life, not someone else&apos;s template.
          </p>
          <Button href="/contact" size="lg" variant="on-brand">
            Talk to us today
          </Button>
        </div>
      </Container>
    </section>
  );
}
