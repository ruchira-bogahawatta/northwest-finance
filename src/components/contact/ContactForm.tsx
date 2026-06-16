"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";
import styles from "./ContactForm.module.css";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.submit} disabled={pending}>
      {pending ? "Sending…" : "Send enquiry"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
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
        <h2 className={styles.successTitle}>Enquiry received</h2>
        <p className={styles.successText}>{state.message}</p>
      </div>
    );
  }

  const v = state.values;

  return (
    <form action={formAction} className={styles.form} noValidate>
      {state.status === "error" && state.message ? (
        <p className={styles.formError} role="alert">
          {state.message}
        </p>
      ) : null}

      <div className={styles.field}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          defaultValue={v?.name}
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
        />
        {state.errors?.name ? (
          <span id="name-error" className={styles.error}>
            {state.errors.name}
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
            defaultValue={v?.email}
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />
          {state.errors?.email ? (
            <span id="email-error" className={styles.error}>
              {state.errors.email}
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
            defaultValue={v?.phone}
            aria-invalid={Boolean(state.errors?.phone)}
            aria-describedby={state.errors?.phone ? "phone-error" : undefined}
          />
          {state.errors?.phone ? (
            <span id="phone-error" className={styles.error}>
              {state.errors.phone}
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
          defaultValue={v?.message}
          placeholder="Tell us a little about the vehicle you're after, or any questions you have."
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
        {state.errors?.message ? (
          <span id="message-error" className={styles.error}>
            {state.errors.message}
          </span>
        ) : null}
      </div>

      <SubmitButton />
      <p className={styles.privacy}>
        We&apos;ll only use your details to respond to your enquiry. Enquiring is
        free and puts you under no obligation.
      </p>
    </form>
  );
}
