"use server";

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
  values?: { name: string; email: string; phone: string; message: string };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handle a contact enquiry.
 *
 * Validation runs on the server so the form is robust without JavaScript.
 * In production, wire the success branch to your email/CRM (e.g. send via a
 * transactional email provider or push to a lead inbox) where indicated.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Please enter a contact number we can reach you on.";
  }
  if (message.length < 10) {
    errors.message = "A line or two about what you're after helps us help you.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values: { name, email, phone, message },
    };
  }

  // TODO: integrate with email/CRM here, e.g.
  //   await sendEnquiryEmail({ name, email, phone, message });
  // For now we accept the enquiry and confirm to the visitor.

  return {
    status: "success",
    message:
      "Thanks — we've got your enquiry and we'll be in touch shortly, usually within one business day.",
  };
}
