import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9()+\-\s]{7,20}$/;

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
}

function validatePayload(payload: ContactPayload): string[] {
  const errors: string[] = [];

  if (!payload.name || payload.name.trim().length < 2) {
    errors.push("Name is required.");
  }

  if (!payload.email || !EMAIL_PATTERN.test(payload.email.trim())) {
    errors.push("A valid email is required.");
  }

  if (!payload.phone || !PHONE_PATTERN.test(payload.phone.trim())) {
    errors.push("A valid phone number is required.");
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

  return errors;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const payload = (await request.json()) as ContactPayload;
    const errors = validatePayload(payload);

    if (errors.length > 0) {
      return NextResponse.json(
        {
          message: "Please review your submission.",
          errors
        },
        { status: 400 }
      );
    }

    console.info("Lead received", {
      source: payload.source ?? "website",
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message
    });

    return NextResponse.json({
      message: "Thank you. Your request has been received and Terrance will reach out soon."
    });
  } catch {
    return NextResponse.json(
      {
        message: "Unable to process your request at this time. Please call 757-814-5785."
      },
      { status: 500 }
    );
  }
}
