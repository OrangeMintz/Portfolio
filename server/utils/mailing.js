export const generateEmailTemplate = ({ name, email, subject, message, date }) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
                .container { background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
                h1 { color: #333; font-size: 26px; font-weight: bold; }
                p { line-height: 1.6; color: #333; font-size: 16px; }
                .footer { background-color: #f1f0f0; padding: 20px; }
                .social-icons img { width: 32px; }
                .info { font-size: 14px; color: #555; }
            </style>
        </head>
        <body style="width:100%; font-family: Arial, sans-serif; background-color: #FAFAFA; padding: 20px; margin: 0;">
            <div class="container" style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <h1 style="text-align: center;">Portfolio Email Received</h1>
                <p>From, <strong>${name}!</strong></p>
                <p>${message}</p>

                <div style="background-color: #f1f0f0; padding: 20px;">
                    <strong>MESSAGE DETAILS</strong>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Date:</strong> ${date}</p>
                </div>

                <p>If you have any questions or need assistance, feel free to reach out to our support team.<br>Email us at support@money-cache.org. We're here to help!</p>
                <p>Sincerely,<br>Djeikuj Nicklai C. Gacus!</p>
            </div>

            <div class="footer" style="background-color: #f1f0f0; padding: 20px;">
                <p style="text-align: center; font-size: 12px; color: #333;">OrangeMintz Portfolio © 2025. All Rights Reserved.</p>
                <p style="text-align: center; font-size: 12px; color: #333;">L.F Dayyo Subd, Purok 6-A, Poblacion, Valencia City, Bukidnon, Philippines</p>
                <div class="social-icons" style="text-align: center;">
                    <a href="https://www.facebook.com/OrangeMintz"><img src="https://efhnvqx.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Facebook"></a>
                    <a href="#"><img src="https://efhnvqx.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Twitter"></a>
                    <a href="#"><img src="https://efhnvqx.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Instagram"></a>
                    <a href="#"><img src="https://efhnvqx.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="YouTube"></a>
                </div>
            </div>
        </body>
    </html>
    `;
};
