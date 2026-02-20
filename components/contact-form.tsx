"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

interface ContactFormProps {
  title?: string;
  description?: string;
  source: string;
  submitLabel?: string;
  defaultMessage?: string;
  className?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9()+\-\s]{7,20}$/;

function validateForm(formState: FormState): FormErrors {
  const errors: FormErrors = {};

  if (formState.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!EMAIL_PATTERN.test(formState.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!PHONE_PATTERN.test(formState.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (formState.message.trim().length < 10) {
    errors.message = "Please share a bit more detail so I can help.";
  }

  return errors;
}

export function ContactForm({
  title = "Request a Consultation",
  description = "Tell me about your goals and I will follow up promptly.",
  source,
  submitLabel = "Send Message",
  defaultMessage = "",
  className = ""
}: ContactFormProps): JSX.Element {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: defaultMessage
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const nextErrors = validateForm(formState);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSuccess(false);
      setStatusMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...formState, source })
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to send your message right now.");
      }

      setIsSuccess(true);
      setStatusMessage(payload.message ?? "Thanks. I will be in touch shortly.");
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: defaultMessage
      });
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    const field = name as keyof FormState;

    setFormState((current) => ({
      ...current,
      [field]: value
    }));

    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  return (
    <section className={`card-surface p-6 md:p-8 ${className}`}>
      <h2 className="font-display text-2xl text-navy">{title}</h2>
      <p className="mt-2 text-sm text-slate">{description}</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor={`${source}-name`} className="mb-1 block text-sm font-medium text-charcoal">
            Full Name
          </label>
          <input
            id={`${source}-name`}
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
            className="input-field"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${source}-name-error` : undefined}
          />
          {errors.name && (
            <p id={`${source}-name-error`} className="mt-1 text-xs text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${source}-email`} className="mb-1 block text-sm font-medium text-charcoal">
              Email
            </label>
            <input
              id={`${source}-email`}
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              className="input-field"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${source}-email-error` : undefined}
            />
            {errors.email && (
              <p id={`${source}-email-error`} className="mt-1 text-xs text-red-700">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${source}-phone`} className="mb-1 block text-sm font-medium text-charcoal">
              Phone
            </label>
            <input
              id={`${source}-phone`}
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              className="input-field"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${source}-phone-error` : undefined}
            />
            {errors.phone && (
              <p id={`${source}-phone-error`} className="mt-1 text-xs text-red-700">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor={`${source}-message`} className="mb-1 block text-sm font-medium text-charcoal">
            Message
          </label>
          <textarea
            id={`${source}-message`}
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows={5}
            className="input-field resize-none"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${source}-message-error` : undefined}
          />
          {errors.message && (
            <p id={`${source}-message-error`} className="mt-1 text-xs text-red-700">
              {errors.message}
            </p>
          )}
        </div>

        <button type="submit" className="btn-primary w-full justify-center disabled:opacity-65" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : submitLabel}
        </button>

        {statusMessage && (
          <p className={`text-sm ${isSuccess ? "text-green-700" : "text-red-700"}`}>{statusMessage}</p>
        )}
      </form>
    </section>
  );
}
