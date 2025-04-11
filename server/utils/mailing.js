export const generateEmailTemplate = ({ name, email, subject, message, date }) => {
    return `<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Template</title>
            </head>

            <body
                style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 40px 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
                <table width="100%" bgcolor="#f5f5f5" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td align="center" style="padding: 40px 0;">
                            <table bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0"
                                style="max-width: 600px; width: 100%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); box-sizing: border-box; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word;">
                                <tr>
                                    <td style="padding: 30px;">
                                        <div style="padding:20px 0px; text-align: center;">
                                            <img src="https://avatars.githubusercontent.com/u/101964865?s=400&u=a7ebd25f462ddea33f995d3a6dc1cd41c03adb65&v=4"
                                                width="150" style="display: block; margin: 0 auto; border-radius:50%">
                                        </div>
                                        <h1
                                            style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333; text-align: center;">
                                            Portfolio Email Received
                                        </h1>
                                        <h1
                                            style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#333333; text-align: center;">
                                            New Message!
                                        </h1>

                                        <p style="line-height: 1.6; color: #333; font-size: 16px; margin: 30px 0;">
                                            From, <strong style="font-weight: bold;">${name}</strong>
                                        </p>

                                        <div>
                                            <p
                                                style="line-height: 1.6; color: #333; font-size: 16px; margin: 10px 0; text-align: justify;">
                                                ${message}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="background-color: #f1f0f0; padding: 20px 30px;">
                                        <p
                                            style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px;">
                                            <strong>MESSAGE DETAILS:</strong>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 0 30px 30px 30px;">
                                        <div style="margin-top: 20px;">
                                            <p style="font-size: 14px; line-height: 1.5; color: #333; margin: 10px 0;">
                                                <strong>Subject:</strong> ${subject}
                                            </p>
                                            <p style="font-size: 14px; line-height: 1.5; color: #333; margin: 10px 0;">
                                                <strong>Name:</strong> ${name}
                                            </p>
                                            <p style="font-size: 14px; line-height: 1.5; color: #333; margin: 10px 0;">
                                                <strong>Email:</strong> ${email}
                                            </p>
                                            <p style="font-size: 14px; line-height: 1.5; color: #333; margin: 10px 0;">
                                                <strong>Date:</strong> ${date}
                                            </p>
                                        </div>

                                        <div style="margin-top: 30px;">
                                            <p
                                                style="-webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-line-height-rule: exactly; font-family: arial, 'helvetica neue', helvetica, sans-serif; line-height: 21px; color: #333333; font-size: 14px;">
                                                If you'd like to reach out or respond to this message, feel free to get in touch
                                                directly. You can contact the
                                                sender at
                                                <a href="mailto:${email}"
                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none; text-decoration: underline; color: #333333;">${email}</a>.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <table bgcolor="#f1f0f0" cellpadding="20" cellspacing="0" border="0"
                                style="max-width: 600px; width: 100%; box-sizing: border-box;">
                                <tr>
                                    <td style="padding: 30px 0px;">
                                        <!-- SOCIAL ICONS FIXED -->
                                        <div style="text-align: center;">
                                            <a href="https://web.facebook.com/OrangeMintz"
                                                style="display: inline-block; margin: 0 7px;">
                                                <img src="https://efhnvqx.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                                    width="32">
                                            </a>
                                            <a href="https://x.com/MintRange" style="display: inline-block; margin: 0 7px;">
                                                <img src="https://efhnvqx.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png"
                                                    width="32">
                                            </a>
                                            <a href="https://www.instagram.com/Kuje.mint"
                                                style="display: inline-block; margin: 0 7px;">
                                                <img src="https://efhnvqx.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png"
                                                    width="32">
                                            </a>
                                            <a href="https://www.youtube.com/@OrangeMintz"
                                                style="display: inline-block; margin: 0 7px;">
                                                <img src="https://efhnvqx.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png"
                                                    width="32">
                                            </a>
                                        </div>
                                        <p style="text-align: center; font-size: 12px; color: #333; line-height: 0.5;">
                                            OrangeMintz Portfolio © 2025. All Rights Reserved.
                                        </p>
                                        <p style="text-align: center; font-size: 12px; color: #333; line-height: 0.5;">
                                            Valencia City, Bukidnon, Philippines
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>

            </html>`;
};
