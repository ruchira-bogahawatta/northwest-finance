"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import {
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact";
import styles from "./ContactForm.module.css";

const EMPTY: ContactValues = { name: "", email: "", phone: "", message: "" };

// Optional form backend (e.g. Formspree / Web3Forms / Getform). Inlined at build
// time. When unset, the form falls back to opening the visitor's email client.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

function buildMailto(values: ContactValues): string {
  const subject = `Website enquiry from ${values.name}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    "",
    values.message,
  ].join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  function update(field: keyof ContactValues, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    // Clear a field's error as the visitor corrects it.
    setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateContact(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setFormError("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setFormError(null);
    setStatus("submitting");

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        // No backend configured: hand off to the visitor's email client.
        window.location.href = buildMailto(values);
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setFormError(
        `Sorry — something went wrong sending that. Please call us on ${site.phone} or email ${site.email}.`,
      );
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6.5 9.5 17 4 11.5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className={styles.successTitle}>Thanks — that&apos;s on its way</h2>
        <p className={styles.successText}>
          {FORM_ENDPOINT
            ? "We've got your enquiry and we'll be in touch shortly, usually within one business day."
            : "Your email should have opened ready to send. Once it's away, we'll be in touch — usually within one business day."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {formError ? (
        <p className={styles.formError} role="alert">
          {formError}
        </p>
      ) : null}

      <div className={styles.field}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <span id="name-error" className={styles.error}>
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <span id="email-error" className={styles.error}>
              {errors.email}
            </span>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <span id="phone-error" className={styles.error}>
              {errors.phone}
            </span>
          ) : null}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us a little about the vehicle you're after, or any questions you have."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <span id="message-error" className={styles.error}>
            {errors.message}
          </span>
        ) : null}
      </div>

      <button type="submit" className={styles.submit} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
      <p className={styles.privacy}>
        We&apos;ll only use your details to respond to your enquiry. Enquiring is
        free and puts you under no obligation.
      </p>
    </form>
  );
}
