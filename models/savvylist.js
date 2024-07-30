const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Customer Schema
const customerSchema = new Schema(
  {
    Fullname: { type: String, required: true, maxlength: 50 },
    Username: { type: String, required: true, maxlength: 50 },
    Password: { type: String, required: true, maxlength: 25 },
    Eircode: { type: String, maxlength: 10 },
    Address: { type: String, maxlength: 255 },
    Email: { type: String, required: true, unique: true, maxlength: 100 },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    ProductName: { type: String, required: true, maxlength: 25 },
    Category: { type: String, required: true, maxlength: 25 },
    Brand: { type: String, required: true, maxlength: 25 },
    Shop: { type: String, required: true, maxlength: 25 },
    Price: { type: Number, required: true },
    Size: { type: String, required: true, maxlength: 20 },
    ShopURL: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);
const Customer = mongoose.model("customer", customerSchema);

module.exports = {
  Customer,
  Product,
};
