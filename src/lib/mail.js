import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendFormEmail(data) {
  try {
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #6A61E0; margin-bottom: 20px;">New Contact Form Submission</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${data.subject}</p>
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <p style="margin: 10px 0; padding: 10px; background: white; border-radius: 4px;">${data.message}</p>
        </div>
        <p style="color: #666; font-size: 14px;">This message was sent from the Corpnix website contact form.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Corpnix Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Contact Form: ${data.subject}`,
      text: `New contact form submission:\n\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`,
      html: htmlContent,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}