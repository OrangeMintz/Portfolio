import Mail from '../model/mail.js'
import nodemailer from 'nodemailer'

import { generateEmailTemplate } from '../utils/mailing.js' // adjust path accordingly


const getMails = async (req, res) => {
    try {
        const mail = await Mail.find()
        res.status(200).json(mail)
    } catch (error) {
        console.log(error);
    }
}

const postMail = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Format date
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        };
        const formattedDate = now.toLocaleString('en-US', options);

        // Save to MongoDB
        const newMail = new Mail({ name, email, subject, message, date: formattedDate });
        const savedMail = await newMail.save();

        // Generate HTML email
        const htmlContent = generateEmailTemplate({ name, email, subject, message, date: formattedDate });

        // Email setup
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            // from: email,
            from: `${name}`,
            to: process.env.EMAIL_USER,
            subject: `[Portfolio Email] ${subject}`,
            html: htmlContent
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent and saved!', savedMail });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Message failed to send.' });
    }
};

const deleteMail = async (req, res) => {
    try {
        const deleteMail = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(`Successfully Deleted`)
    } catch (error) {
        console.log(error)
    }
}

export { getMails, postMail, deleteMail }