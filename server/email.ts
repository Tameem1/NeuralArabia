import nodemailer from "nodemailer";
import { type ContactMessage } from "../shared/schema";

// Create an Ethereal test account (free service that catches emails)
// This creates a new disposable email address for testing purposes
async function createTestAccount() {
  const testAccount = await nodemailer.createTestAccount();

  return {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  };
}

/**
 * Send an email notification for a contact form submission
 * Uses Ethereal for testing, which creates a preview URL for each sent email
 */
export async function sendContactNotification(
  message: ContactMessage,
): Promise<boolean> {
  try {
    // First, log to console for debugging
    console.log("\n===== NEW CONTACT FORM SUBMISSION =====");
    console.log(`To: tameem@gmail.com`);
    console.log(`From: ${message.name} <${message.email}>`);
    console.log(`Company: ${message.company}`);
    console.log(`Service Type: ${message.serviceType}`);
    console.log(`Message: ${message.message}`);
    console.log(`Date: ${message.createdAt}`);
    console.log("=======================================\n");

    // Create a test account for Ethereal email
    const config = await createTestAccount();

    // Create a transporter
    const transporter = nodemailer.createTransport(config);

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${message.name}" <${message.email}>`,
      to: "tamemkabbani24@gmail.com",
      subject: `New Contact Form Submission: ${message.serviceType}`,
      text: `
Name: ${message.name}
Email: ${message.email}
Company: ${message.company}
Service Type: ${message.serviceType}
Message: ${message.message}
Date: ${message.createdAt}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
  <h2 style="color: #4F6EC1; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${message.name}</p>
  <p><strong>Email:</strong> ${message.email}</p>
  <p><strong>Company:</strong> ${message.company}</p>
  <p><strong>Service Type:</strong> ${message.serviceType}</p>
  <p><strong>Message:</strong></p>
  <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message.message}</p>
  <p><strong>Date:</strong> ${message.createdAt}</p>
</div>
      `,
    });

    // Log the URL where the email can be viewed (this is an Ethereal feature)
    console.log("Email sent successfully!");
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}
