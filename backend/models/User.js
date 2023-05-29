const mongoose = require("mongoose");
const { Schema } = mongoose;

const user_schema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const user_model = mongoose.model("User", user_schema);

module.exports = user_model;
