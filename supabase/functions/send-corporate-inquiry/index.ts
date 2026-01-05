import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CorporateInquiryRequest {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  quantity: string;
  message?: string;
}

async function sendEmail(to: string[], subject: string, html: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Earthy Concepts <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received corporate inquiry request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { companyName, contactName, email, phone, quantity, message }: CorporateInquiryRequest = await req.json();

    console.log("Processing inquiry from:", companyName, contactName);

    // Send notification email to the business
    const businessEmailResponse = await sendEmail(
      [email], // Using customer email for testing - replace with actual business email
      `New Corporate Inquiry from ${companyName}`,
      `
        <h1>New Corporate Wellness Inquiry</h1>
        <hr />
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Estimated Quantity:</strong> ${quantity}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No additional message"}</p>
        <hr />
        <p><em>This inquiry was submitted through the Earthy Concepts website.</em></p>
      `
    );

    console.log("Business notification sent:", businessEmailResponse);

    // Send confirmation email to the customer
    const customerEmailResponse = await sendEmail(
      [email],
      "We received your corporate wellness inquiry!",
      `
        <h1>Thank you for your inquiry, ${contactName}!</h1>
        <p>We have received your corporate wellness inquiry for <strong>${companyName}</strong>.</p>
        <p>Here's a summary of your request:</p>
        <ul>
          <li><strong>Estimated Quantity:</strong> ${quantity}</li>
          ${message ? `<li><strong>Your Message:</strong> ${message}</li>` : ""}
        </ul>
        <p>Our corporate team will review your inquiry and get back to you within <strong>24-48 business hours</strong> with a customized proposal.</p>
        <p>In the meantime, feel free to explore our wellness products.</p>
        <br />
        <p>Warm regards,</p>
        <p><strong>The Earthy Concepts Corporate Team</strong></p>
      `
    );

    console.log("Customer confirmation sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Inquiry submitted successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-corporate-inquiry function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
