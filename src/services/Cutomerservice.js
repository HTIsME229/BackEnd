const Customer = require("../model/customer");
const aqp = require("api-query-params");
const CreateCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      email: customerData.email,
      phone: customerData.phone,
      address: customerData.address,
      description: customerData.description,
      name: customerData.name,
      image: customerData.imageUrl,
    });
  } catch (err) {}
};
const CreateManyCustomerService = async (listCustomer) => {
  try {
    let result = await Customer.insertMany(listCustomer);
    return result;
  } catch (err) {
    return null;
  }
};
const getAllCustomerService = async (limit, page, queryString) => {
  let result;
  if (limit && page) {
    let offset = (+page - 1) * +limit;
    const { filter } = aqp(queryString);
    delete filter.page;
    result = await Customer.find(filter).skip(offset).limit(limit).exec();
  } else {
    result = await Customer.find({});
  }
  return result;
};
const postUpdateCustomerService = async (dataUpdate) => {
  return await Customer.findOneAndUpdate(dataUpdate.id, {
    name: dataUpdate.name,
    email: dataUpdate.email,
    address: dataUpdate.address,
  });
};
const deleteCustomerService = async (id) => {
  return await Customer.deleteById(id);
};
const deleteArrayCustomerService = async (id) => {
  return await Customer.delete({ _id: { $in: id } });
};
module.exports = {
  CreateCustomerService,
  CreateManyCustomerService,
  getAllCustomerService,
  postUpdateCustomerService,
  deleteCustomerService,
  deleteArrayCustomerService,
};
