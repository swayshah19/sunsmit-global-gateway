import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    console.log("Sending contact inquiry email...");

    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["export02@sunsmitdyechem.com"],
      replyTo: formData.email,
      subject: `New Inquiry from ${formData.companyName}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Company Name:</strong> ${formData.companyName}</p>
        <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <p><strong>Product Interest:</strong> ${formData.product}</p>
        <p><strong>Quantity Required:</strong> ${formData.quantity}</p>
        <hr>
        <h3>Message:</h3>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
