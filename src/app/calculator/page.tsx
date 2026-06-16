import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader/PageHeader";
import { Section } from "@/components/ui/Section/Section";
import { Container } from "@/components/ui/Container/Container";
import { RepaymentCalculator } from "@/components/calculator/RepaymentCalculator";
import { CtaBand } from "@/components/sections/CtaBand/CtaBand";
import styles from "./calculator.module.css";

export const metadata: Metadata = {
  title: "Repayment calculator",
  description:
    "Estimate your weekly, fortnightly or monthly vehicle repayments. Adjust the amount, term and rate to see what fits your budget.",
};

const factors = [
  {
    title: "Your situation",
    body: "Income, expenses and credit history all play a part. A stronger profile usually means a sharper rate.",
  },
  {
    title: "The vehicle",
    body: "Age, type and value matter. Newer vehicles often attract lower rates than older ones.",
  },
  {
    title: "Loan size & term",
    body: "How much you borrow and over how long changes both your repayment and the total interest you pay.",
  },
  {
    title: "The deposit",
    body: "A deposit or trade-in reduces what you borrow — which can lower your repayments and your rate.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <PageHeader
        title="What will it cost each week?"
        intro="Move the sliders to see an estimated repayment. It's a guide to get you started — we'll confirm the real numbers when we talk."
      />

      <Section spacing="tight">
        <Container>
          <RepaymentCalculator variant="page" />
        </Container>
      </Section>

      <Section variant="surface" aria-labelledby="factors-heading">
        <Container>
          <h2 id="factors-heading" className={styles.factorsTitle}>
            What shapes your actual rate
          </h2>
          <p className={styles.factorsIntro}>
            The calculator uses an indicative rate. When we put together a real
            quote, a few things move the number:
          </p>
          <ul className={styles.factors}>
            {factors.map((f) => (
              <li key={f.title} className={styles.factor}>
                <h3 className={styles.factorTitle}>{f.title}</h3>
                <p className={styles.factorBody}>{f.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="See your real numbers"
        text="Send us a few details and we'll come back with what you can borrow and a repayment you can count on."
      />
    </>
  );
}
