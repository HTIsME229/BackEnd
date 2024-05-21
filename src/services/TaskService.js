const Task = require("../model/task");
const aqp = require("api-query-params");
const postCreateTaskService = async (taskData) => {
  if (taskData.type === "EMPTY-TASK") {
    let result = await Task.create(taskData);
    return result;
  }
};

const getAllTaskService = async (data) => {
  const page = data.page;
  const { filter, limit } = aqp(data);
  delete filter.page;
  let offset = (+page - 1) * +limit;
  let result = await Task.find(filter).skip(offset).limit(limit).exec();
  return result;
};
const deleteTaskService = async (id) => {
  let result = await Task.deleteById(id);
  return result;
};
const updateTaskService = async (
  id,
  name,
  startDate,
  endDate,
  description,
  usersInfo,
  projectInfo
) => {
  console.log(id);
  let project = await Task.findById(id);
  console.log(project);
  return await Task.findOneAndUpdate(
    { id },
    {
      name,
      startDate,
      endDate,
      description,
      usersInfo,
      projectInfo,
    }
  );
};
module.exports = {
  postCreateTaskService,
  getAllTaskService,
  updateTaskService,
  deleteTaskService,
};
