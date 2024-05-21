const { query } = require("express");
const {
  postCreateTaskService,
  getAllTaskService,
  deleteTaskService,
  updateTaskService,
} = require("../services/TaskService");
const Task = require("../model/task");
const postCreateTask = async (req, res) => {
  let result = await postCreateTaskService(req.body);
  return res.status(200).json({
    EC: 0,
    result,
  });
};
const getAllTask = async (req, res) => {
  let result = await getAllTaskService(req.query);
  return res.status(200).json({
    EC: 0,
    result,
  });
};
const DeleteTask = async (req, res) => {
  let result = await deleteTaskService(req.body.id);
  return res.status(200).json({
    EC: 0,
    result,
  });
};
const UpdateTask = (req, res) => {
  let { id, name, startDate, endDate, description, usersInfo, projectInfo } =
    req.body;
  let result = updateTaskService(
    id,
    name,
    startDate,
    endDate,
    description,
    usersInfo,
    projectInfo
  );
  return res.status(200).json({
    EC: 0,
    result,
  });
};
module.exports = { postCreateTask, getAllTask, DeleteTask, UpdateTask };
