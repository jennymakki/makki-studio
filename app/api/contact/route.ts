import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message, service, timeline, budget } = body;

    await resend.emails.send({
      from: "Makki Studio <onboarding@resend.dev>",
      to: ["makkistudio@hotmail.com"],
      subject: `Ny förfrågan från ${name}`,
      replyTo: email,
      html: `
        <h2>Ny projektförfrågan</h2>

        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Typ:</strong> ${service}</p>
        <p><strong>Tidsplan:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <h3>Meddelande</h3>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}