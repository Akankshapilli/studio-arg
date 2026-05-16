import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, projectType, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "Studio ARG Website <onboarding@resend.dev>", // change after domain verification
      to: ["info@studioarg.in"],
      replyTo: email,
      subject: `New Enquiry from ${name} — Studio ARG`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <h2 style="color: #B08D57; font-weight: 300; border-bottom: 1px solid #e0d9ce; padding-bottom: 12px;">
            New Project Enquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; color: #5C5751; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; width: 130px;">Name</td>
              <td style="padding: 10px 0; font-size: 15px;">${name}</td>
            </tr>
            <tr style="background: #f9f6f1;">
              <td style="padding: 10px 0; color: #5C5751; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em;">Email</td>
              <td style="padding: 10px 0; font-size: 15px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #5C5751; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em;">Project Type</td>
              <td style="padding: 10px 0; font-size: 15px;">${projectType}</td>
            </tr>
            <tr style="background: #f9f6f1;">
              <td style="padding: 10px 0; color: #5C5751; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 15px; line-height: 1.7;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #B08D57; letter-spacing: 0.1em;">— Studio ARG Website</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}