import { Section } from "@/components/ui/Section/Section";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./Faq.module.css";

export interface FaqItem {
  q: string;
  a: string;
}

const defaultItems: FaqItem[] = [
  {
    q: "Will enquiring affect my credit score?",
    a: "No. An enquiry with us is just a conversation about your options. We only run a formal credit check once you've decided you'd like to proceed — and we'll always ask you first.",
  },
  {
    q: "Can I get finance with bad credit?",
    a: "Often, yes. We work with a range of lenders and look at your whole situation, not just a number. If you've been declined elsewhere, it's still worth a chat — we explore every avenue to find a yes.",
  },
  {
    q: "What can I use the finance for?",
    a: "Cars, utes, vans and motorbikes — new or used, from a dealer or a private sale. If you're not sure whether your vehicle qualifies, just ask.",
  },
  {
    q: "How much can I borrow?",
    a: "It depends on your income, the vehicle and your circumstances. The repayment calculator gives you a realistic guide; we'll confirm exact numbers once we understand your situation.",
  },
  {
    q: "Are there any fees?",
    a: "Any fees are explained clearly before you commit to anything — they're part of the numbers we walk you through. No surprises buried in the fine print.",
  },
  {
    q: "How quickly can I be approved?",
    a: "Often the same day, once we have the details we need. We'll keep you in the loop at every step rather than leaving you wondering.",
  },
];

interface FaqProps {
  items?: FaqItem[];
}

export function Faq({ items = defaultItems }: FaqProps) {
  return (
    <Section variant="default" aria-labelledby="faq-heading">
      <Container size="narrow">
        <SectionHeading
          id="faq-heading"
          align="center"
          title="Questions, answered"
          intro="The things people most often want to know before they get in touch."
        />
        <div className={styles.list}>
          {items.map((item) => (
            <details key={item.q} className={styles.item} name="faq">
              <summary className={styles.summary}>
                <span>{item.q}</span>
                <span className={styles.chevron} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 7.5 5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className={styles.answer}>{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
