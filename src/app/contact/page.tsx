import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader/PageHeader";
import { Section } from "@/components/ui/Section/Section";
import { Container } from "@/components/ui/Container/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Northwest Finance about your next vehicle. Send an enquiry or give us a call — no obligation, no pressure.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's talk"
        intro="Send us a few details and we'll be in touch — usually within one business day. Prefer to talk? Give us a call."
      />

      <Section>
        <Container className={styles.layout}>
          <div className={styles.formCol}>
            <h2 className={styles.formHeading}>Send an enquiry</h2>
            <ContactForm />
          </div>

          <aside className={styles.aside}>
            <h2 className={styles.asideHeading}>Other ways to reach us</h2>
            <dl className={styles.details}>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={site.emailHref}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{site.hours}</dd>
              </div>
              <div>
                <dt>Where we are</dt>
                <dd>{site.location}</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </Section>
    </>
  );
}
