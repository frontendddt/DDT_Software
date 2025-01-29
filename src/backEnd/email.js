const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
        user: 'your-email@example.com',
        pass: 'your-password',
    },
});

const sendConfirmationEmail = (name, email) =>
{
    const mailOptions = {
        from: 'your-email@example.com',
        to: email,
        subject: 'Thank you for contacting us',
        text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nThe Contact Us Team`,
    };

    transporter.sendMail(mailOptions, (error, info) =>
    {
        if (error)
        {
            console.error('Error sending confirmation email:', error);
        } else
        {
            console.log('Confirmation email sent:', info.response);
        }
    });
};

module.exports = {
    sendConfirmationEmail,
};