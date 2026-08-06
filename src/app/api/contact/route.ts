import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactNotification } from "@/lib/mail";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, serviceInterested, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  let submission;
  try {
    submission = await prisma.contactSubmission.create({
      data: { name, email, phone, serviceInterested, message },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }

  try {
    await sendContactNotification({ name, email, phone, serviceInterested, message });
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
  }

  return NextResponse.json({ success: true, submission }, { status: 201 });
}
