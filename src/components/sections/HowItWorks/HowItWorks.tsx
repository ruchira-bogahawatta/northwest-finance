import { Section } from "@/components/ui/Section/Section";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/Button/Button";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "Tell us about you",
    body: "A quick online enquiry or phone call — just enough for us to understand what you need and what you can manage.",
  },
  {
    title: "We find your options",
    body: "We match you with the right lender and rate from the panel we work with, doing the shopping around on your behalf.",
  },
  {
    title: "Get your approval",
    body: "We come back to you with what you can borrow, your repayments, and the terms — all explained in plain English.",
  },
  {
    title: "Drive away",
    body: "Sign, settle and pick up your car. We handle the paperwork so the last step is the easy one.",
  },
];

interface HowItWorksProps {
  /** Show the closing CTA (used on the homepage, hidden on the dedicated page). */
  withCta?: boolean;
}

export function HowItWorks({ withCta = true }: HowItWorksProps) {
  return (
    <Section variant="surface" aria-labelledby="how-heading">
      <Container>
        <SectionHeading
          id="how-heading"
          title="Four steps to the keys"
          intro="No queues, no jargon, no being passed around. Here's the whole process."
        />

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.num} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>

        {withCta ? (
          <div className={styles.cta}>
            <Button href="/contact" size="lg">
              Start your enquiry
            </Button>
            <span className={styles.ctaNote}>
              Takes a few minutes · No obligation
            </span>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
