import mongoose from "mongoose";

export const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
    requirement: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const CustomerModel = mongoose.model("Customer", CustomerSchema);
