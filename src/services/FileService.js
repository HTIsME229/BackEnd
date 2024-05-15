const { json } = require("express");
const path = require("path");

const UploadSingle = async (fileObject) => {
  const finalname = `${Date.now()}-${fileObject.name}`;
  uploadPath = `./src/public/images/${finalname}`;
  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      filenameL: fileObject.name,
      path: finalname,
      err: null,
    };
  } catch (err) {
    if (err) {
      return {
        status: "fail",
        filenameL: fileObject.name,
        path: null,
        err: JSON.stringify(err),
      };
    }
  }
};
module.exports = UploadSingle;
