const Project = require("../model/project");
const {
  CreateProjectService,
  getAllProjectService,
  deleteProjectService,
  updateProjectService,
} = require("../services/ProjectService");
const postCreateEmptyProject = async (req, res) => {
  let result = await CreateProjectService(req.body);
  return res.status(200).json({
    type: req.body.type,
    result,
  });
};
const getAllProject = async (req, res) => {
  let result = await getAllProjectService(req.query);
  return res.status(200).json({
    EC: 0,
    result,
  });
};
const deleteProject = async (req, res) => {
  let result = await deleteProjectService(req.body.id);
  return res.status(200).json({
    EC: 0,
    result,
  });
};
const updateProject = async (req, res) => {
  let { id, name, startDate, endDate, description } = req.body;
  console.log(id);
  let result = await updateProjectService(
    id,
    name,
    startDate,
    endDate,
    description
  );
  return res.status(200).json({
    EC: 0,
    result,
  });
};
module.exports = {
  postCreateEmptyProject,
  getAllProject,
  deleteProject,
  updateProject,
};
