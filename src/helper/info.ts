import nodemailer from "nodemailer";
import { envVar } from "../env";

export type customerRequirements = {
  name: string;
  phoneNumber: string;
  email?: string;
  requirement: string;
};

export type customerDetails = customerRequirements & {
  createdAt: string;
};

export const sendEmail: any = (customerDetails: customerDetails) => {
  let config: object = {
    service: "gmail",
    auth: {
      user: envVar.FROM_EMAIL,
      pass: envVar.FROM_PASS,
    },
  };

  let transport: any = nodemailer.createTransport(config);

  let htmlMessage: string =
    "<h2>New Customer enquiry ✔</h2> <br>" +
    `<b>Name: ${customerDetails.name}<br>` +
    `Phone Number: ${customerDetails.phoneNumber}<br>` +
    `Email: ${customerDetails.email}<br>` +
    `Requirement: ${customerDetails.requirement}<br> ` +
    `Enquiry registered: ${customerDetails.createdAt}</b>`;

  let message: object = {
    from: envVar.FROM_EMAIL, // sender address
    to: envVar.TO_EMAIL, // list of receivers
    subject: `🚀 New Customer Enquiry - ${customerDetails.phoneNumber} 🚀`, // Subject line
    text: "New Customer enquiry ✔", // plain text body
    html: htmlMessage, // html body
  };

  return transport.sendMail(message);
};
