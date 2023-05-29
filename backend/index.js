const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const app = express();
const User = require("./models/User.js");

require("dotenv").config();
const secret_string = bcrypt.genSaltSync(12);

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

console.log("line 16 from index.js");
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test is okay");
});
//mangadb password sCJQJh0rLz1qjvsQ
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newlyCreatedUserDoc = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, secret_string),
  });
  console.log("line 35");
  console.log(newlyCreatedUserDoc);
  res.json(newlyCreatedUserDoc);
});

app.listen(4000);
