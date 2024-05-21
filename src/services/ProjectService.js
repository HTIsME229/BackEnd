const Project = require("../model/project");
const aqp = require("api-query-params");
const CreateProjectService = async (projectData) => {
  try {
    // let result = await Project.create({
    //   name: projectData.name,
    //   startDate: projectData.startDate,
    //   endDate: projectData.endDate,
    //   description: projectData.description,
    //   customerInfor: {
    //     name: projectData.customerInfor.name,
    //     phone: projectData.customerInfor.phone,
    //     email: projectData.customerInfor.email,
    //   },
    //   usersInfor: [],
    //   leader: {
    //     name: projectData.leader.name,
    //     email: projectData.leader.email,
    //   },
    //   tasks: [],
    // });
    if (projectData.type === "EMPTY-PROJECT") {
      let result = await Project.create(projectData);
      return result;
    }
    if (projectData.type === "ADD-USERS") {
      console.log(projectData);
      let myProject = await Project.findById(projectData.projectId).exec();
      for (let i = 0; i < projectData.usersArr.length; i++)
        myProject.usersInfor.push(projectData.usersArr[i]);
      let result = await myProject.save();
      return result;
    }
    if (projectData.type === "REMOVE-USERS") {
      let result = await Project.updateMany(
        { _id: projectData.projectId },
        { $pull: { usersInfor: { $in: projectData.usersArr } } }
      );
      return result;
    }
    if (projectData.type === "ADD-TASKS") {
      let myProject = await Project.findById(projectData.projectId).exec();
      for (let i = 0; i < projectData.taskArr.length; i++) {
        myProject.tasks.push(projectData.taskArr[i]);
      }

      let result = await myProject.save();
      return result;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-
  }
};
const getAllProjectService = async (data) => {
  const page = data.page;
  const { filter, limit, population } = aqp(data);
  delete filter.page;
  let offset = (+page - 1) * +limit;
  let result = await Project.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();
  return result;
};
const deleteProjectService = async (id) => {
  let result = await Project.deleteById(id);
  return result;
};
const updateProjectService = async (
  id,
  name,
  startDate,
  endDate,
  description
) => {
  console.log(id, name);
  return await Project.findOneAndUpdate(
    { id },
    {
      name,
      startDate,
      endDate,
      description,
    }
  );
};
module.exports = {
  CreateProjectService,
  getAllProjectService,
  deleteProjectService,
  updateProjectService,
};
