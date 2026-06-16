/**
 * Contact form validation — pure functions usable on the client.
 *
 * The site is a static export (GitHub Pages), so there's no server to post to.
 * Validation runs in the browser; submission goes to an optional form backend
 * (see ContactForm) with a mailto fallback.
 */

export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please tell us your name.";
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Please enter a contact number we can reach you on.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "A line or two about what you're after helps us help you.";
  }

  return errors;
}
