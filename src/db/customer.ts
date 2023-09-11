import { customerRequirements } from "../helper/info";
import { CustomerModel } from "./customer.model";

export const createRequirements = (
  customerRequirements: customerRequirements
) => CustomerModel.create(customerRequirements);
