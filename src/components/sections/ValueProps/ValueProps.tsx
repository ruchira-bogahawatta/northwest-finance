import { Section } from "@/components/ui/Section/Section";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./ValueProps.module.css";

const props = [
  {
    title: "We look at the whole picture",
    body: "Self-employed, new to New Zealand, or knocked back before? We weigh up your whole situation, not just a credit score, and explore every option to find a yes.",
    icon: (
      <path
        d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm9-5v5l3 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Clear numbers, up front",
    body: "See your repayments before you commit. We spell out the rate, the term and the total cost in plain language — no surprises hidden in the fine print.",
    icon: (
      <path
        d="M4 6h16M4 12h16M4 18h10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    title: "A real person, start to finish",
    body: "One person who knows your situation and does the legwork with the lenders for you — so you spend less time on paperwork and more time choosing the car.",
    icon: (
      <path
        d="M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-7 9a7 7 0 0 1 14 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export function ValueProps() {
  return (
    <Section variant="default" aria-labelledby="why-heading">
      <Container>
        <SectionHeading
          id="why-heading"
          title="Finance that works the way it should"
          intro="Buying a car is a big deal. We make the money side of it calm, clear and genuinely on your side."
        />
        <ul className={styles.grid}>
          {props.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
