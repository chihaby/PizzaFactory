const nodemailer = require('nodemailer');

// create transport for nodemailer for testing for production use sengrid or postmark
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  // Test send email
  const info = await transporter.sendMail({
    from: "Slick's Slices <slick@example.com>",
    to: 'orders@example.com',
    subject: 'New Order!',
    html: `<p>Your new pizza order is ready!</p>`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
