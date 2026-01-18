import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json();
		const { name, phone, email, service, message } = data;

		// Validate required fields
		if (!name || !phone || !email) {
			return new Response(
				JSON.stringify({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' }),
				{ status: 400, headers: { 'Content-Type': 'application/json' } }
			);
		}

		// Get service name in Thai
		const serviceNames: Record<string, string> = {
			security: 'บริการรักษาความปลอดภัย (Security)',
			cleaning: 'บริการทำความสะอาด (Cleaning)',
			duo: 'Duo Care (บริการผสมผสาน Security + Cleaning)',
			smart: 'ระบบ Smart Security',
			other: 'อื่นๆ',
		};

		const serviceName = service ? serviceNames[service] || service : 'ไม่ระบุ';

		// Configure email transporter
		// NOTE: For production, use environment variables for credentials
		// You'll need to set up Gmail App Password for this to work
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'royalguardservices2016@gmail.com',
				// You should use APP_PASSWORD from environment variable
				pass: import.meta.env.GMAIL_APP_PASSWORD || 'your-app-password',
			},
		});

		// Email content
		const mailOptions = {
			from: 'royalguardservices2016@gmail.com',
			to: 'royalguardservices2016@gmail.com',
			subject: `[ใบเสนอราคาใหม่] จาก ${name}`,
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
								<td style="padding: 12px; color: #333;">${name}</td>
							</tr>
							<tr>
								<td style="padding: 12px; font-weight: bold; color: #002147;">เบอร์โทรศัพท์</td>
								<td style="padding: 12px; color: #333;">${phone}</td>
							</tr>
							<tr style="background-color: #f8f9fa;">
								<td style="padding: 12px; font-weight: bold; color: #002147;">อีเมล</td>
								<td style="padding: 12px; color: #333;">${email}</td>
							</tr>
							<tr>
								<td style="padding: 12px; font-weight: bold; color: #002147;">บริการที่สนใจ</td>
								<td style="padding: 12px; color: #333; background-color: #fffbeb; border-left: 4px solid #fbbf24;">${serviceName}</td>
							</tr>
							<tr style="background-color: #f8f9fa;">
								<td style="padding: 12px; font-weight: bold; color: #002147; vertical-align: top;">รายละเอียดเพิ่มเติม</td>
								<td style="padding: 12px; color: #333; white-space: pre-wrap;">${message || 'ไม่ระบุ'}</td>
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

				ชื่อ-นามสกุล: ${name}
				เบอร์โทรศัพท์: ${phone}
				อีเมล: ${email}
				บริการที่สนใจ: ${serviceName}
				รายละเอียดเพิ่มเติม: ${message || 'ไม่ระบุ'}
			`,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		return new Response(
			JSON.stringify({ message: 'ส่งข้อมูลเรียบร้อยแล้ว' }),
			{ status: 200, headers: { 'Content-Type': 'application/json' } }
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(
			JSON.stringify({ error: 'เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
};
