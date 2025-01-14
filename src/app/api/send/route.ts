import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_ADDRESS;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      throw new Error("All fields are required!!");
    }

    //send email to me
    await resend.emails.send({
      from: `${name} <${fromEmail}>`,
      to: ["anaspappadan@gmail.com"],
      subject: `${name} sent a message!`,
      html: `Email: ${email} <br> 
      <pre> message: ${message} </pre>`,
    });

    // Send email to the user
    const { data, error } = await resend.emails.send({
      from: `Anas P <${fromEmail}>`,
      to: [email],
      subject: "Your message has been received!",
      react: EmailTemplate({ name }),
    });

    if (error) {
      throw error;
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
