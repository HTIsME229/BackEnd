const connection = require("../config/database");
const Users = require("../model/user");
const getAllUsers = async () => {
  const result = await Users.find();
  return result;
};
const getUserWithId = async (id) => {
  const results = await Users.findById(id).exec();
  console.log(results);
  return results;
};
const updateUserById = async (userId, name, city, email) => {
  await Users.findByIdAndUpdate(userId, { name, city, email });
};
const deleteUserById = async (userId) => {
  await Users.findByIdAndDelete(userId);
};
module.exports = { getAllUsers, getUserWithId, updateUserById, deleteUserById };
