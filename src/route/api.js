const express = require("express");
const {
  getUserApi,
  postCreateUserApi,
  postUpdateUserApi,
  postHandleRemoveUserApi,
  postUploadFile,
} = require("../controller/APIController");
const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomer,
  postUpdateCustomer,
  postDeleteCustomer,
  postDeleteArrayCustomer,
} = require("../controller/customer");
const routerAPI = express.Router();

routerAPI.get("/users", getUserApi);
routerAPI.post("/users", postCreateUserApi);
routerAPI.put("/users", postUpdateUserApi);
routerAPI.delete("/users", postHandleRemoveUserApi);
routerAPI.post("/files", postUploadFile);
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomer);
routerAPI.put("/customers", postUpdateCustomer);
routerAPI.delete("/customers", postDeleteCustomer);
routerAPI.delete("/customers-many", postDeleteArrayCustomer);
module.exports = routerAPI;
