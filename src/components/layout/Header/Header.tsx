"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { Logo } from "@/components/ui/Logo/Logo";
import { navLinks, site } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <Container as="div" className={styles.bar}>
        <Logo />

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${active ? styles.active : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={site.phoneHref} className={styles.phone}>
            {site.phone}
          </a>
          <Button href="/contact" size="md" className={styles.cta}>
            Talk to us
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="visually-hidden">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
          <span
            className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ""}`}
            aria-hidden="true"
          />
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobileOpen : ""}`}
        hidden={!menuOpen}
      >
        <Container>
          <ul className={styles.mobileList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.mobileLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <Button href="/contact" size="lg" className={styles.mobileCta}>
              Talk to us
            </Button>
            <a href={site.phoneHref} className={styles.mobilePhone}>
              Call {site.phone}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
