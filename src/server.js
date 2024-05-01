const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const WebRoute = require("./route/web");
const app = express();
configViewEngine(app);
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
app.use("/", WebRoute);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
