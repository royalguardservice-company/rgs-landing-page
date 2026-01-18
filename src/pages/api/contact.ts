import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

// In-memory rate limiting store (for production, use Redis or a database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_IP = 5;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwarded?.split(",")[0] || realIp || "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; error?: string } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_IP) {
    const resetMinutes = Math.ceil((record.resetTime - now) / 60000);
    return {
      allowed: false,
      error: `ส่งข้อมูลบ่อยเกินไป กรุณาลองใหม่ใน ${resetMinutes} นาที`,
    };
  }

  record.count++;
  return { allowed: true };
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

function sanitizeString(input: string, maxLength: number = 1000): string {
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .replace(/data:/gi, "");
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Rate limiting check
    const clientIp = getClientIp(request);
    const rateLimitCheck = checkRateLimit(clientIp);
    if (!rateLimitCheck.allowed) {
      return new Response(JSON.stringify({ error: rateLimitCheck.error }), {
        status: 429,
        headers: { "Content-Type": "application/json", "Retry-After": "3600" },
      });
    }

    const data = await request.json();
    const { name, phone, email, service, message } = data;

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

    // Configure email transporter
    // NOTE: For production, use environment variables for credentials
    // You'll need to set up Gmail App Password for this to work
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "royalguardservices2016@gmail.com",
        // You should use APP_PASSWORD from environment variable
        pass: import.meta.env.GMAIL_APP_PASSWORD as string,
      },
    });

    // Email content
    const mailOptions = {
      from: "royalguardservices2016@gmail.com",
      to: "royalguardservices2016@gmail.com",
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
