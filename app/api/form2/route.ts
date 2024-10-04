import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailData {
  
  subject: string;
  text: string;
}

export async function POST(request: Request) {
  const { subject, text }: EmailData = await request.json();

  console.log( subject, text);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to:process.env.GMAIL_RECIVER,
      subject,
      text,
    });

    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
