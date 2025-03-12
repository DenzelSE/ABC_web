import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;

    const { formType, email, ...formData } = data;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const formattedData = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    await transporter.sendMail({
      from: `"Website Contact" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New ${formType} Form Submission`,
      text: `You received a new ${formType} inquiry:\n\n${formattedData}\n\nUser Email: ${email}`,
    });

    await transporter.sendMail({
      from: `"Support Team" <${EMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out!`,
      text: `Hello,\n\nThank you for reaching out about ${formType}. We will get back to you shortly!\n\nBest,\nAfrica's Blockchain Club`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
