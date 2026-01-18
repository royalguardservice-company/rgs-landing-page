import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import DOMPurify from "isomorphic-dompurify";

const TURNSTILE_SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY as string;

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = TURNSTILE_SECRET_KEY;

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
        }),
      },
    );

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
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
 * Sanitize string input using DOMPurify to prevent XSS attacks.
 * Removes all HTML tags and dangerous content while preserving plain text.
 */
function sanitizeString(input: string, maxLength: number = 1000): string {
  // Use DOMPurify with config to strip ALL HTML (not just sanitize)
  const clean = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // Remove all HTML tags
    ALLOWED_ATTR: [], // Remove all attributes
    KEEP_CONTENT: true, // Keep text content
  });

  // Trim and enforce max length
  return clean.trim().slice(0, maxLength);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Validate email credentials are configured
    const gmailEmail = import.meta.env.GMAIL_APP_EMAIL;
    const gmailPassword = import.meta.env.GMAIL_APP_PASSWORD;

    if (!gmailEmail || !gmailPassword) {
      console.error("Email credentials not configured");
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
      return new Response(
        JSON.stringify({ error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const isValidTurnstile = await verifyTurnstileToken(turnstileToken);
    if (!isValidTurnstile) {
      return new Response(
        JSON.stringify({ error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate required fields exist
    if (!name || !phone || !email) {
      return new Response(
        JSON.stringify({ error: "กรุณากรอกข้อมูลให้ครบถ้วน" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate and sanitize name
    const sanitizedName = sanitizeString(name, 100);
    if (sanitizedName.length < 2) {
      return new Response(
        JSON.stringify({
          error: "กรุณาระบุชื่อผู้ติดต่อให้ถูกต้อง (2-100 ตัวอักษร)",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate phone format
    if (!validateThaiPhone(phone)) {
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
      return new Response(
        JSON.stringify({ error: "กรุณาระบุอีเมลให้ถูกต้อง" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    const sanitizedEmail = email.trim().toLowerCase();

    // Validate service value if provided
    const allowedServices = [
      "security",
      "cleaning",
      "duo",
      "smart",
      "other",
      "",
    ];
    if (service && !allowedServices.includes(service)) {
      return new Response(
        JSON.stringify({ error: "กรุณาเลือกบริการให้ถูกต้อง" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Sanitize message
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
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailEmail as string,
          pass: gmailPassword as string,
        },
      });

      // Email content
      const mailOptions = {
        from: gmailEmail as string,
        to: gmailEmail as string,
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
        text: `
				รายละเอียดการติดต่อใหม่จากเว็บไซต์

				ชื่อ-นามสกุล: ${sanitizedName}
				เบอร์โทรศัพท์: ${sanitizedPhone}
				อีเมล: ${sanitizedEmail}
				บริการที่สนใจ: ${serviceName}
				รายละเอียดเพิ่มเติม: ${sanitizedMessage || "ไม่ระบุ"}
			`,
      };

      // Send email
      await transporter.sendMail(mailOptions);
    } catch (emailError: unknown) {
      // Determine error type for better debugging and monitoring
      const error = emailError as { code?: string; command?: string; responseCode?: number; response?: string; message: string };

      if (error.code === "EAUTH") {
        console.error("Email authentication failed:", {
          code: error.code,
          message: "Invalid Gmail credentials or App Password"
        });
        throw new Error("Email authentication failed");
      }

      if (error.code === "ECONNECTION" || error.code === "ETIMEDOUT") {
        console.error("Email connection error:", {
          code: error.code,
          message: error.message
        });
        throw new Error("Email service unavailable");
      }

      if (error.responseCode && error.responseCode >= 500) {
        console.error("Email server error:", {
          responseCode: error.responseCode,
          response: error.response
        });
        throw new Error("Email server error");
      }

      // Generic email error - log full details for debugging
      console.error("Nodemailer error:", {
        code: error.code,
        command: error.command,
        responseCode: error.responseCode,
        message: error.message
      });
      throw new Error("Failed to send email");
    }

    return new Response(JSON.stringify({ message: "ส่งข้อมูลเรียบร้อยแล้ว" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        error: "เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
