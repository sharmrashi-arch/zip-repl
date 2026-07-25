import { Router } from "express";
import { logger } from "../lib/logger";

const admissionsRouter = Router();

admissionsRouter.post("/admissions", async (req, res) => {
  const { childName, dob, program, parentName, phone, email, address } = req.body;

  if (!childName || !dob || !program || !parentName || !phone) {
    res.status(400).json({ error: "Required fields missing" });
    return;
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    logger.error("BREVO_API_KEY not set");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const schoolEmail = "sharmaaaarashi@gmail.com";

  const htmlContent = `
    <h2 style="color:#f97316;">New Admission Application — Anjali Kids Play School</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
      <tr><td style="padding:8px;font-weight:bold;background:#fff7ed;">Child's Name</td><td style="padding:8px;">${childName}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#fff7ed;">Date of Birth</td><td style="padding:8px;">${dob}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#fff7ed;">Program</td><td style="padding:8px;">${program}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#fff7ed;">Parent / Guardian</td><td style="padding:8px;">${parentName}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#fff7ed;">Phone</td><td style="padding:8px;">${phone}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#fff7ed;">Email</td><td style="padding:8px;">${email || "—"}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#fff7ed;">Address</td><td style="padding:8px;">${address || "—"}</td></tr>
    </table>
    <p style="margin-top:16px;color:#6b7280;font-size:13px;">Submitted via the school website admission form.</p>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Anjali Kids Play School", email: schoolEmail },
        to: [{ email: schoolEmail, name: "Anjali Kids Admin" }],
        subject: `New Admission Application: ${childName}`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      logger.error({ status: response.status, body: errBody }, "Brevo API error");
      res.status(500).json({ error: "Failed to send email" });
      return;
    }

    logger.info({ childName }, "Admission email sent");
    res.status(200).json({ success: true });
  } catch (err) {
    logger.error({ err }, "Email send error");
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default admissionsRouter;
