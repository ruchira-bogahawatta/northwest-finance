import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader/PageHeader";
import { Section } from "@/components/ui/Section/Section";
import { Container } from "@/components/ui/Container/Container";
import { CtaBand } from "@/components/sections/CtaBand/CtaBand";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Northwest Finance is a New Zealand vehicle-finance company built on plain language, real people and finance that fits real life.",
};

const values = [
  {
    title: "Plain language, always",
    body: "Finance is full of jargon. We're not. We explain things the way we'd want them explained to us — clearly, and without the fine-print voice.",
  },
  {
    title: "Everyone gets a fair go",
    body: "Self-employed, new to the country, or rebuilding after a rough patch — we look past the score to the person, and explore every option.",
  },
  {
    title: "No pressure, ever",
    body: "We'd rather you make the right call than a quick one. You'll never get a hard sell or a countdown clock from us.",
  },
  {
    title: "Local and accountable",
    body: `We're based in ${site.location.split(",")[0]} and we answer the phone. When you deal with us, you're dealing with people who stand behind their work.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Finance with the human bit left in"
        intro="We started Northwest Finance because getting a car loan shouldn't feel like an interrogation."
      />

      <Section>
        <Container size="narrow" className={styles.story}>
          <p>
            For a lot of Kiwis, a car isn&apos;t a luxury — it&apos;s how you get
            to work, do the school run and keep life moving. Yet the finance
            behind it is too often confusing, impersonal, and quick to say no.
          </p>
          <p>
            We do it differently. We take the time to understand your situation,
            shop your enquiry across the lenders we work with, and come back with
            options that actually fit your budget. You get one person who knows
            your story from the first call to the day you drive away — and
            numbers you can trust, explained in words that make sense.
          </p>
          <p>
            No queues. No jargon. No pressure. Just vehicle finance that treats
            you like a person.
          </p>
        </Container>
      </Section>

      <Section variant="surface" aria-labelledby="values-heading">
        <Container>
          <h2 id="values-heading" className={styles.valuesTitle}>
            What we stand for
          </h2>
          <ul className={styles.values}>
            {values.map((v) => (
              <li key={v.title} className={styles.value}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Let's find your next car together"
        text="Tell us what you're after. We'll do the legwork and keep it simple."
      />
    </>
  );
}
