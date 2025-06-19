import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, company, message, services } = await request.json();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.GMAIL,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            accessToken: process.env.GMAIL_ACCESS_TOKEN,
        }
    });

    ///The function verifying if SMTP server is ready
    await transporter.verify();

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_RECEIVE,
        replyTo: email,
        subject : `Message from Dynamic Solutions Website`,
        html: `
           <h1>Name: ${name}</h1>
           <p>Email: ${email}</p>
           <p>Company: ${company}</p>
           <p>Services: ${services.join(', ')}</p>
           <p>Message: ${message}</p>
           <p><i>Message from Exesenergy Website</i></p>
         `,
    };
    console.log("Mail options:", mailOptions);

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");

    return NextResponse.json({ message: "Email sent successfully." });;
}