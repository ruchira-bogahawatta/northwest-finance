import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./Logo.module.css";

interface LogoProps {
  /** "default" for light backgrounds, "inverse" for the dark footer/bands. */
  tone?: "default" | "inverse";
}

/**
 * Brand lockup: a compass mark nodding to "Northwest" + the wordmark.
 * Links home and carries an accessible label.
 */
export function Logo({ tone = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`${styles.logo} ${tone === "inverse" ? styles.inverse : ""}`}
      aria-label={`${site.name} — home`}
    >
      <span className={styles.mark} aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32" role="presentation">
          <rect x="0" y="0" width="32" height="32" rx="9" className={styles.markBg} />
          {/* Compass needle pointing north-west */}
          <path d="M22.5 9.5 14.2 14.2 9.5 22.5 17.8 17.8Z" fill="#fff" />
          <path d="M22.5 9.5 17.8 17.8 14.2 14.2Z" fill="#fff" fillOpacity="0.55" />
        </svg>
      </span>
      <span className={styles.wordmark}>
        Northwest<span className={styles.word2}>Finance</span>
      </span>
    </Link>
  );
}
