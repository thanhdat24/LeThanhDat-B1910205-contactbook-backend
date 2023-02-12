const express = require("express");
const cors = require("cors");

const app = express();

const contactRouters = require("./app/routes/contactRoutes");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactRouters);

module.exports = app;
