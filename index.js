const express = require("express");
const app = express();
const sendmail = require("./helper/email");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/sendMail", async (req, res) => {
  await sendmail();
  res.json({ message: "email udah kekirim ke email mu" });
});

app.listen(3030, () => console.log("Listening at port: " + 3030));
