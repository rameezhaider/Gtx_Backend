//import dotenv from 'dotenv';
const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/", require("./Routes/DataRoutes"));
//Database and server created
const url = process.env.MONGO_URI
const PORT = process.env.PORT || 5000;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Error occurred");
  });