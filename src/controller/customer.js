const Customer = require("../model/customer");
const {
  CreateCustomerService,
  CreateManyCustomerService,
  getAllCustomerService,
  postUpdateCustomerService,
  deleteCustomerService,
  deleteArrayCustomerService,
} = require("../services/Cutomerservice");
const UploadSingle = require("../services/FileService");
const postCreateCustomer = async (req, res) => {
  let { email, phone, address, description, name } = req.body;
  let imageUrl = "";
  if (!req.files || Object.keys(req.files).length === 0) {
  } else {
    let file = req.files.image;
    let result = await UploadSingle(file);
    imageUrl = result.path;
    let customerData = {
      email,
      phone,
      address,
      description,
      name,
      imageUrl,
    };
    let customer = await CreateCustomerService(customerData);
    return res.status(200).json({
      EC: 0,
    });
  }
  //   }

  // name: { type: String, require: true },
  // address: String,
  // phone: String,
  // email: String,
  // image: String,
  // description: String,
};
const postCreateArrayCustomer = async (req, res) => {
  console.log(req.body.customer);
  let result = await CreateManyCustomerService(req.body.customer);
  if (result)
    return res.status(200).json({
      EC: 0,
      result: result,
    });
  else {
    return res.status(200).json({
      EC: -1,
      result: result,
    });
  }
};
const getAllCustomer = async (req, res) => {
  let result = await getAllCustomerService();
  if (result)
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  else {
    return res.status(200).json({
      EC: -1,
      data: result,
    });
  }
};
const postUpdateCustomer = async (req, res) => {
  let { id, address, name, email } = req.body;
  let dataUpdate = {
    id,
    address,
    name,
    email,
  };
  let result = await postUpdateCustomerService(dataUpdate);
  console.log(result);
  if (result)
    return res.status(200).json({
      EC: 0,
      dataUpdate,
    });
  else {
    return res.status(200).json({
      EC: -1,
      dataUpdate,
    });
  }
};
const postDeleteCustomer = async (req, res) => {
  let result = await deleteCustomerService(req.body.id);
  if (result)
    return res.status(200).json({
      EC: 0,
      dataDelete: result,
    });
};
const postDeleteArrayCustomer = async (req, res) => {
  console.log(req.body.id);
  let result = await deleteArrayCustomerService(req.body.id);
  if (result)
    return res.status(200).json({
      EC: 0,
      dataDelete: result,
    });
};
module.exports = {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomer,
  postUpdateCustomer,
  postDeleteCustomer,
  postDeleteArrayCustomer,
};
