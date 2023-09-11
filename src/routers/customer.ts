import { createNewRequirements } from "../controller/customer.controller";
import { Router } from "express";

export const nodeapi = Router();

nodeapi.post("/customer/create-requirement", createNewRequirements);

