import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT!),
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export default async function contactHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, budget } = req.body;

    const mailOptions = {
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      subject: 'Morley Media Group Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).end();
  }
}