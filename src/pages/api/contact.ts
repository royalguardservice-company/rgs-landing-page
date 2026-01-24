import type { APIRoute } from "astro";
import { Resend } from "resend";

// Opt out of prerendering - this API route will be server-rendered
export const prerender = false;

async function verifyTurnstileToken(
  token: string,
  secretKey: string,
): Promise<boolean> {
  try {
    const formData = new FormData();
    formData.append("secret", secretKey);
    formData.append("response", token);

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      },
    );

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error(
      "[CONTACT API] TURNSTILE ERROR: Failed to verify token -",
      error,
    );
    return false;
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

function validateThaiPhone(phone: string): boolean {
  // Supports formats: 0xx-xxx-xxxx, 0xxxxxxxxx, 02-xxx-xxxx, etc.
  const phoneRegex = /^0[1-9]\d{1,2}[-]?\d{3}[-]?\d{4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

/**
 * Sanitize string input to prevent XSS attacks.
 * Removes all HTML tags and dangerous content while preserving plain text.
 * Uses a simple regex approach compatible with Cloudflare Workers runtime.
 */
function sanitizeString(input: string, maxLength: number = 1000): string {
  // Remove HTML tags - this is a simple approach that works in Cloudflare Workers
  // For more complex sanitization needs, consider using a library with Workers support
  let clean = input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&lt;/g, '<') // Decode HTML entities
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');

  // Trim and enforce max length
  return clean.trim().slice(0, maxLength);
}

export const POST: APIRoute = async ({ request, locals }) => {
  console.log("[CONTACT API] REQUEST: New contact form submission received");
  try {
    // Access environment variables from Cloudflare runtime
    const env = locals.runtime.env;

    const TURNSTILE_SECRET_KEY = env.TURNSTILE_SECRET_KEY as string;
    const RESEND_API_KEY = env.RESEND_API_KEY as string;
    const fromEmail = env.RESEND_FROM_EMAIL as string;
    const toEmail = env.RESEND_TO_EMAIL as string;

    // Validate Resend API key is configured
    if (!RESEND_API_KEY) {
      console.error(
        "[CONTACT API] ERROR: Resend API key not configured in environment",
      );
      return new Response(
        JSON.stringify({
          error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    const data = await request.json();
    const {
      name,
      phone,
      email,
      service,
      message,
      turnstileToken,
      website_url,
    } = data;

    // Check honeypot field - if filled, it's a bot
    // Return generic success message to trick bots
    if (website_url && website_url.trim().length > 0) {
      console.log(
        "[CONTACT API] HONEYPOT: Bot detected - website_url field was filled:",
        website_url,
      );
      return new Response(
        JSON.stringify({ message: "ส่งข้อมูลเรียบร้อยแล้ว" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Verify Turnstile token - use generic error message
    if (!turnstileToken) {
      console.error(
        "[CONTACT API] VALIDATION ERROR: Turnstile token is missing from request",
      );
      return new Response(
        JSON.stringify({ error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const isValidTurnstile = await verifyTurnstileToken(
      turnstileToken,
      TURNSTILE_SECRET_KEY,
    );
    if (!isValidTurnstile) {
      console.error(
        "[CONTACT API] VALIDATION ERROR: Turnstile token verification failed - invalid or expired token",
      );
      return new Response(
        JSON.stringify({ error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate required fields exist
    if (!name || !phone || !email) {
      console.error(
        "[CONTACT API] VALIDATION ERROR: Missing required fields - name:",
        !!name,
        "phone:",
        !!phone,
        "email:",
        !!email,
      );
      return new Response(
        JSON.stringify({ error: "กรุณากรอกข้อมูลให้ครบถ้วน" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate and sanitize name
    // Check original length first (before sanitization removes characters)
    const trimmedName = name.trim();
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      console.error(
        "[CONTACT API] VALIDATION ERROR: Invalid name length - got",
        trimmedName.length,
        "chars, required 2-100 chars",
      );
      return new Response(
        JSON.stringify({
          error: "กรุณาระบุชื่อผู้ติดต่อให้ถูกต้อง (2-100 ตัวอักษร)",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    // Then sanitize for security
    console.log("Before sanitizeString");
    const sanitizedName = sanitizeString(name, 100);

    // Validate phone format
    if (!validateThaiPhone(phone)) {
      console.error(
        "[CONTACT API] VALIDATION ERROR: Invalid phone number format - got:",
        phone,
      );
      return new Response(
        JSON.stringify({
          error: "กรุณาระบุเบอร์โทรศัพท์ให้ถูกต้อง (เช่น 0xx-xxx-xxxx)",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    const sanitizedPhone = phone.replace(/\s/g, "");

    // Validate email format
    if (!validateEmail(email)) {
      console.error(
        "[CONTACT API] VALIDATION ERROR: Invalid email format - got:",
        email,
      );
      return new Response(
        JSON.stringify({ error: "กรุณาระบุอีเมลให้ถูกต้อง" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    const sanitizedEmail = email.trim().toLowerCase();

    // Validate service value if provided
    const allowedServices = ["security", "cleaning", "duo", "smart", "other"];
    if (service && !allowedServices.includes(service)) {
      console.error(
        "[CONTACT API] VALIDATION ERROR: Invalid service type - got:",
        service,
        "allowed:",
        allowedServices,
      );
      return new Response(
        JSON.stringify({ error: "กรุณาเลือกบริการให้ถูกต้อง" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Sanitize message
    // Check original length first (before sanitization removes characters)
    const trimmedMessage = (message || "").trim();
    if (trimmedMessage.length > 1000) {
      console.error(
        "[CONTACT API] VALIDATION ERROR: Message too long - got",
        trimmedMessage.length,
        "chars, max 1000 chars",
      );
      return new Response(
        JSON.stringify({
          error: "รายละเอียดเพิ่มเติมต้องไม่เกิน 1000 ตัวอักษร",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    // Then sanitize for security
    const sanitizedMessage = sanitizeString(message || "", 1000);

    // Get service name in Thai
    const serviceNames: Record<string, string> = {
      security: "บริการรักษาความปลอดภัย (Security)",
      cleaning: "บริการทำความสะอาด (Cleaning)",
      duo: "Duo Care (บริการผสมผสาน Security + Cleaning)",
      smart: "ระบบ Smart Security",
      other: "อื่นๆ",
    };

    const serviceName = service ? serviceNames[service] || service : "ไม่ระบุ";

    console.log(
      "[CONTACT API] VALIDATED: Form data validated - name:",
      sanitizedName,
      "email:",
      sanitizedEmail,
      "service:",
      serviceName,
    );

    try {
      // Initialize Resend client
      const resend = new Resend(RESEND_API_KEY);

      // Send email using Resend
      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: `[ใบเสนอราคาใหม่] จาก ${sanitizedName}`,
        html: `
				<div style="font-family: 'Sarabun', sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px;">
					<div style="background: linear-gradient(135deg, #002147 0%, #003366 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
						<h1 style="color: #fbbf24; margin: 0; font-size: 28px;">รอยัลการ์ด เซอร์วิสเซส</h1>
						<p style="color: #ffffff; margin: 5px 0 0; font-size: 14px;">Royal Guard Services</p>
					</div>

					<div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
						<h2 style="color: #002147; border-bottom: 2px solid #fbbf24; padding-bottom: 10px; margin-top: 0;">รายละเอียดการติดต่อ</h2>

						<table style="width: 100%; border-collapse: collapse;">
							<tr style="background-color: #f8f9fa;">
								<td style="padding: 12px; font-weight: bold; color: #002147; width: 150px;">ชื่อ-นามสกุล</td>
								<td style="padding: 12px; color: #333;">${sanitizedName}</td>
							</tr>
							<tr>
								<td style="padding: 12px; font-weight: bold; color: #002147;">เบอร์โทรศัพท์</td>
								<td style="padding: 12px; color: #333;">${sanitizedPhone}</td>
							</tr>
							<tr style="background-color: #f8f9fa;">
								<td style="padding: 12px; font-weight: bold; color: #002147;">อีเมล</td>
								<td style="padding: 12px; color: #333;">${sanitizedEmail}</td>
							</tr>
							<tr>
								<td style="padding: 12px; font-weight: bold; color: #002147;">บริการที่สนใจ</td>
								<td style="padding: 12px; color: #333; background-color: #fffbeb; border-left: 4px solid #fbbf24;">${serviceName}</td>
							</tr>
							<tr style="background-color: #f8f9fa;">
								<td style="padding: 12px; font-weight: bold; color: #002147; vertical-align: top;">รายละเอียดเพิ่มเติม</td>
								<td style="padding: 12px; color: #333; white-space: pre-wrap;">${sanitizedMessage || "ไม่ระบุ"}</td>
							</tr>
						</table>

						<div style="margin-top: 25px; padding: 15px; background-color: #fffbeb; border-left: 4px solid #fbbf24; border-radius: 4px;">
							<p style="margin: 0; font-size: 14px; color: #92400e;">
								<strong>หมายเหตุ:</strong> กรุณาติดต่อลูกค้ากลับโดยเร็วที่สุด
							</p>
						</div>

						<div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
							<p style="margin: 5px 0;">บริษัท รักษาความปลอดภัย รอยัลการ์ด เซอร์วิสเซส จำกัด</p>
							<p style="margin: 5px 0;">300/44 โครงการพรีเมียมเพลซ ถนนนวมินทร์ แขวงนวมินทร์ เขตบึงกุ่ม กรุงเทพมหานคร 10240</p>
							<p style="margin: 5px 0;">โทร: 02-379-1713-4 | ใบอนุญาต: ตภ.2600068</p>
						</div>
					</div>
				</div>
			`,
      });

      if (error) {
        console.error(
          "[CONTACT API] RESEND ERROR: Failed to send email -",
          error,
        );
        throw new Error(`Resend error: ${error.message}`);
      }

      console.log(
        "[CONTACT API] SUCCESS: Email sent successfully via Resend - ID:",
        data?.id,
      );
    } catch (emailError: unknown) {
      // Determine error type for better debugging and monitoring
      const error = emailError as {
        code?: string;
        message: string;
        name?: string;
      };

      console.error("[CONTACT API] EMAIL ERROR: Failed to send email -", {
        name: error.name,
        message: error.message,
        code: error.code,
      });
      throw new Error("Failed to send email");
    }

    console.log(
      "[CONTACT API] SUCCESS: Contact form processed successfully for:",
      sanitizedEmail,
    );
    return new Response(JSON.stringify({ message: "ส่งข้อมูลเรียบร้อยแล้ว" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(
      "[CONTACT API] UNEXPECTED ERROR: Caught in top-level handler -",
      error,
    );
    return new Response(
      JSON.stringify({
        error: "เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
