import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader/PageHeader";
import { Section } from "@/components/ui/Section/Section";
import { Container } from "@/components/ui/Container/Container";
import { HowItWorks } from "@/components/sections/HowItWorks/HowItWorks";
import { Faq } from "@/components/sections/Faq/Faq";
import { CtaBand } from "@/components/sections/CtaBand/CtaBand";
import styles from "./how-it-works.module.css";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From first enquiry to driving away — here's exactly how vehicle finance with Northwest Finance works, and what you'll need to get started.",
};

const checklist = [
  "A NZ driver licence or other photo ID",
  "Recent payslips or, if self-employed, bank statements",
  "A rough idea of the vehicle and the amount you need",
  "Details of any trade-in or deposit",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How finance with us works"
        intro="No queues and no jargon. Here's the whole journey, and the handful of things to have ready."
      />

      <HowItWorks withCta={false} />

      <Section aria-labelledby="checklist-heading">
        <Container className={styles.checklistLayout}>
          <div>
            <h2 id="checklist-heading">What to have handy</h2>
            <p className={styles.intro}>
              You don&apos;t need everything to start the conversation — but
              having these ready helps us move quickly when you&apos;re set to go.
            </p>
          </div>
          <ul className={styles.checklist}>
            {checklist.map((item) => (
              <li key={item} className={styles.checkItem}>
                <span className={styles.tick} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.5 5.5 8.25 14 4 9.75"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Faq />
      <CtaBand />
    </>
  );
}
