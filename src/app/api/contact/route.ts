import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not defined. Simulating email dispatch to yadadrienterprises86@gmail.com");
      // Simulate success for local testing / when API key is not configured yet
      return NextResponse.json({
        success: true,
        message: "Enquiry simulation successful (local environment). Configure RESEND_API_KEY on Vercel to receive real emails.",
      });
    }

    // Call Resend API directly using standard fetch
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Sri Yadadri Enterprises Web <onboarding@resend.dev>",
        to: ["yadadrienterprises86@gmail.com"],
        subject: `New Website Enquiry: ${service.replace("-", " ").toUpperCase()} - ${name}`,
        html: `
          <h2>New Website RFQ / Enquiry</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif;">
            <tr style="background-color: #0f172a; color: #ffffff;">
              <th colspan="2" style="text-align: left;">Lead Details</th>
            </tr>
            <tr>
              <td style="width: 30%; font-weight: bold;">Client Name:</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Phone Number:</td>
              <td>${phone}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Email Address:</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Service Needed:</td>
              <td style="text-transform: capitalize;">${service.replace("-", " ")}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; vertical-align: top;">Enquiry Description:</td>
              <td>${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
          <p style="font-size: 11px; color: #64748b; margin-top: 20px;">
            Submitted via Sri Yadadri Enterprises Website.
          </p>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);
      return NextResponse.json(
        { error: "Failed to forward enquiry to administration desk." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
  } catch (error) {
    console.error("Contact API routing error:", error);
    return NextResponse.json(
      { error: "An internal routing error occurred." },
      { status: 500 }
    );
  }
}
