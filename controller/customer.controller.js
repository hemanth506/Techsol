const asyncHandler = require("express-async-handler");
const { sendEmail } = require("../helper/info.js");
const { createRequirements } = require("../db/customer.js");

const createNewRequirements = asyncHandler(async (req, res) => {
  console.log("🚀 ~ file: customer.controller.ts:12 ~ req:", req.body);
  console.log("🚀 Hemanth test 🚀");
  if (!req.body.name || !req.body.phoneNumber || !req.body.requirement) {
    console.log(
      "🚀 ~ file: customer.controller.ts:16 ~ Mandatory values are missing!:"
    );
    res.status(400);
    throw new Error("Mandatory values are missing!");
  }

  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email || "Not specified";
  const requirement = req.body.requirement;

  const details = {
    name,
    phoneNumber,
    email,
    requirement,
  };

  const requirementCreated = await createRequirements(details);
  console.log(
    "🚀 ~ file: customer.ts:27 ~ router.post ~ New requirement created"
  );

  const customerDetails = {
    name,
    phoneNumber,
    email,
    requirement,
    createdAt: requirementCreated.createdAt,
  };

  // res.status(201).send({
  //   customerID: requirementCreated._id
  // });

  sendEmail(customerDetails)
    .then((info) => {
      res.status(201).send({
        customerID: requirementCreated._id,
        mailDetails: { messageID: info.messageId, ...info.envelope },
      });
    })
    .catch((err) => {
      res.status(400);
      throw new Error("Requirement created but Mail not sent!");
    });
});

module.exports = { createNewRequirements };
