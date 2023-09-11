import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  customerDetails,
  customerRequirements,
  sendEmail,
} from "../helper/info";
import { createRequirements } from "../db/customer";

export const createNewRequirements = asyncHandler(
  async (req: Request, res: Response) => {
    console.log("🚀 ~ file: customer.controller.ts:12 ~ req:", req.body);
    console.log("🚀 Hemanth test 🚀");
    if (!req.body.name || !req.body.phoneNumber || !req.body.requirement) {
      console.log(
        "🚀 ~ file: customer.controller.ts:16 ~ Mandatory values are missing!:"
      );
      res.status(400);
      throw new Error("Mandatory values are missing!");
    }

    const name: string = req.body.name;
    const phoneNumber: string = req.body.phoneNumber;
    const email: string = req.body.email || "Not specified";
    const requirement: string = req.body.requirement;

    const details: customerRequirements = {
      name,
      phoneNumber,
      email,
      requirement,
    };

    const requirementCreated: any = await createRequirements(details);
    console.log(
      "🚀 ~ file: customer.ts:27 ~ router.post ~ New requirement created"
    );

    const customerDetails: customerDetails = {
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
      .then((info: any) => {
        res.status(201).send({
          customerID: requirementCreated._id,
          mailDetails: { messageID: info.messageId, ...info.envelope },
        });
      })
      .catch((err: Error) => {
        res.status(400);
        throw new Error("Requirement created but Mail not sent!");
      });
  }
);
