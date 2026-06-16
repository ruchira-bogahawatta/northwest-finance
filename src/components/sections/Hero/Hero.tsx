import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { RepaymentCalculator } from "@/components/calculator/RepaymentCalculator";
import styles from "./Hero.module.css";

const trustPoints = ["Locally owned & operated", "All credit situations welcome", "No-obligation chat"];

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.heading}>
            Finance for your next car, without the runaround.
          </h1>
          <p className={styles.lead}>
            Northwest Finance helps everyday New Zealanders get into the right
            vehicle. See what your repayments could look like, then talk to a
            real person who&apos;ll sort the rest.
          </p>

          <div className={styles.actions}>
            <Button href="/contact" size="lg">
              Talk to us
            </Button>
            <Button href="/how-it-works" size="lg" variant="secondary">
              See how it works
            </Button>
          </div>

          <ul className={styles.trust}>
            {trustPoints.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.calc}>
          <RepaymentCalculator variant="card" />
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16.5 5.5 8.25 14 4 9.75"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
