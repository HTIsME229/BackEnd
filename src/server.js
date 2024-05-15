const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const path = require("path");

require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const WebRoute = require("./route/web");
const APIRoute = require("./route/api");
const app = express();
const connection = require("./config/database");
configViewEngine(app);
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
app.use(fileUpload());

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));
app.use("/", WebRoute);
app.use("/v1/api", APIRoute);
// test
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console("error conect DB", error);
  }
})();
