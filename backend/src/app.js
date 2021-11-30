const express = require("express");
const cors = require("cors");
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/products", require("./routes/products"));

module.exports = app;
