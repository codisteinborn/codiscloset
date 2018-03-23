const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prodSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  image: {type: String},
  date: { type: Date, default: Date.now }
});

const Prod = mongoose.model("Prod", prodSchema);

module.exports = Prod;
