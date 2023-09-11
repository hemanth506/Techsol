const nodemailer = require("nodemailer");
const { envVar } = require("../env.js");

const sendEmail = (customerDetails) => {
  let config = {
    service: "gmail",
    auth: {
      user: envVar.FROM_EMAIL,
      pass: envVar.FROM_PASS,
    },
  };

  let transport = nodemailer.createTransport(config);

  let htmlMessage =
    "<h2>New Customer enquiry ✔</h2> <br>" +
    `<b>Name: ${customerDetails.name}<br>` +
    `Phone Number: ${customerDetails.phoneNumber}<br>` +
    `Email: ${customerDetails.email}<br>` +
    `Requirement: ${customerDetails.requirement}<br> ` +
    `Enquiry registered: ${customerDetails.createdAt}</b>`;

  let message = {
    from: envVar.FROM_EMAIL, // sender address
    to: envVar.TO_EMAIL, // list of receivers
    subject: `🚀 New Customer Enquiry - ${customerDetails.phoneNumber} 🚀`, // Subject line
    text: "New Customer enquiry ✔", // plain text body
    html: htmlMessage, // html body
  };

  return transport.sendMail(message);
};

module.exports = { sendEmail };
