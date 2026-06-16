import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <Container className={styles.wrap}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>We can&apos;t find that page</h1>
      <p className={styles.text}>
        The page you&apos;re after may have moved or never existed. Let&apos;s get
        you back on the road.
      </p>
      <div className={styles.actions}>
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/calculator" size="lg" variant="secondary">
          Try the calculator
        </Button>
      </div>
    </Container>
  );
}
