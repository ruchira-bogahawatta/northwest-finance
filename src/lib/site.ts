/**
 * Central site configuration: brand details, contact info, navigation.
 * Keeping this in one place means content stays consistent across every
 * component and is trivial to update.
 */

export const site = {
  name: "Northwest Finance",
  shortName: "Northwest",
  url: "https://northwestfinance.co.nz",
  description:
    "New Zealand vehicle finance, made simple. Estimate your repayments, see what you could borrow, and talk to a real person — no jargon, no pressure.",
  phone: "0800 000 000",
  phoneHref: "tel:0800000000",
  email: "hello@northwestfinance.co.nz",
  emailHref: "mailto:hello@northwestfinance.co.nz",
  hours: "Mon–Fri, 8:30am–6pm",
  location: "Auckland, New Zealand",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Repayment calculator", href: "/calculator" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Finance",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Repayment calculator", href: "/calculator" },
      { label: "What you can borrow", href: "/calculator" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
