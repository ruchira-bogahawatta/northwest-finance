import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import { Logo } from "@/components/ui/Logo/Logo";
import { footerNav, site } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = 2026;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo tone="inverse" />
            <p className={styles.blurb}>
              Vehicle finance for everyday New Zealanders. Clear estimates, real
              people, no pressure.
            </p>
            <div className={styles.contact}>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.emailHref}>{site.email}</a>
              <span>{site.hours}</span>
            </div>
          </div>

          <nav className={styles.cols} aria-label="Footer">
            {footerNav.map((col) => (
              <div key={col.heading} className={styles.col}>
                <h2 className={styles.colHeading}>{col.heading}</h2>
                <ul className={styles.colList}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.colLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name}. {site.location}.
          </p>
          <p className={styles.disclaimer}>
            Lending criteria, fees, terms and conditions apply. Estimates shown
            on this site are a guide only and are not an offer of finance.
          </p>
        </div>
      </Container>
    </footer>
  );
}
