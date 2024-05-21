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
const {
  postCreateEmptyProject,
  getAllProject,
  deleteProject,
  updateProject,
} = require("../controller/project");
const {
  postCreateTask,
  getAllTask,
  DeleteTask,
  UpdateTask,
} = require("../controller/TaskController");
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
routerAPI.post("/projects", postCreateEmptyProject);
routerAPI.get("/projects", getAllProject);
routerAPI.delete("/projects", deleteProject);
routerAPI.put("/projects", updateProject);
routerAPI.post("/tasks", postCreateTask);
routerAPI.get("/tasks", getAllTask);
routerAPI.delete("/tasks", DeleteTask);
routerAPI.put("/tasks", UpdateTask);
module.exports = routerAPI;
