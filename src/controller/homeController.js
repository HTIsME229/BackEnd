const connection = require("../config/database");
const {
  getAllUsers,
  getUserWithId,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDservice");
const Users = require("../model/user");
const getHomePage = async (req, res) => {
  return res.render("Home", { listUser: await getAllUsers() });
};
const getABC = (req, res) => {
  res.render("sample");
};
const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  // const [results, fields] = await connection.query(
  //   `INSERT INTO Users (email,name,city)
  //   VALUES (? ,?, ?);
  //   `,
  //   [email, name, city]
  // );
  await Users.create({
    email: email,
    name: name,
    city: city,
  });
  res.send("Creat User Success");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  // console.log(req.params);
  const result = await getUserWithId(req.params.userId);
  if (result) {
    res.render("edit", { userData: result });
  }
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;
  await updateUserById(userId, name, city, email);
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const result = await getUserWithId(req.params.userId);
  if (result) {
    res.render("delete.ejs", { userData: result });
  }
};
const postHandleRemoveUser = async (req, res) => {
  // console.log(req.body.userId);
  await deleteUserById(req.body.userId);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
