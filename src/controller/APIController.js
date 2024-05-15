const Users = require("../model/user");
const Customer = require("../model/customer");
const {
  getAllUsers,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDservice");
const UploadSingle = require("../services/FileService");
const getUserApi = async (req, res) => {
  return res.status(200).json({
    EC: 0,
    data: await getAllUsers(),
  });
};

const postCreateUserApi = async (req, res) => {
  let { email, name, city } = req.body;
  const user = await Users.create({
    email: email,
    name: name,
    city: city,
  });
  return res.status(200).json({
    EC: 0,
    data: user,
  });
};
// const getUpdatePageApi = async (req, res) => {
//   // console.log(req.params);
//   const result = await getUserWithId(req.params.userId);
//   if (result) {
//     res.render("edit", { userData: result });
//   }
// };

const postUpdateUserApi = async (req, res) => {
  let { email, name, city, userId } = req.body;
  await updateUserById(userId, name, city, email);
  return res.status(200).json({
    EC: 0,
    dataUdate: {
      email,
      name,
      city,
      userId,
    },
  });
};
const postHandleRemoveUserApi = async (req, res) => {
  await deleteUserById(req.body.userId);
  return res.status(200).json({
    EC: 0,
    DeleteId: req.body.userId,
  });
};
const postUploadFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  const file = req.files.Image;

  if (Array.isArray(file)) {
    let result = [];
    file.map(async (item, index) => {
      let newresult = await UploadSingle(item);
      result = [...result, newresult];
      if (result.length == file.length)
        return res.status(200).json({
          EC: 0,
          countImage: result.length,
          data: result,
        });
    });
  } else {
    const result = await UploadSingle(file);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  }
};
module.exports = {
  postCreateUserApi,
  getUserApi,
  postUpdateUserApi,
  postHandleRemoveUserApi,
  postUploadFile,
};
