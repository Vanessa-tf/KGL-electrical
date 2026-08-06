import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function sendContactNotification(submission: {
  name: string;
  email: string;
  phone?: string | null;
  serviceInterested?: string | null;
  message: string;
}) {
  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;

  await transporter.sendMail({
    from: `KGL Electrical Website <${process.env.EMAIL_USER}>`,
    to,
    replyTo: submission.email,
    subject: `New enquiry from ${submission.name}`,
    text: [
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Phone: ${submission.phone || "-"}`,
      `Service: ${submission.serviceInterested || "-"}`,
      "",
      submission.message,
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Phone:</strong> ${submission.phone || "-"}</p>
      <p><strong>Service:</strong> ${submission.serviceInterested || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${submission.message.replace(/\n/g, "<br />")}</p>
    `,
  });
}
