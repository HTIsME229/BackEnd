const express = require("express");
const {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controller/homeController");
const router = express.Router();
router.get("/", getHomePage);
router.get("/abc", getABC);
router.post("/create-user", postCreateUser);
router.get("/create", getCreatePage);
router.get("/update/:userId", getUpdatePage);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:userId", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);
module.exports = router;
