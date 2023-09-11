const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
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

const CustomerModel = mongoose.model("Customer", CustomerSchema);

module.exports = { CustomerModel };
