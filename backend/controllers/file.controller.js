const formidable = require("formidable");
const fs = require("fs");
const File = require("../models/fileModel");

exports.fileUpload = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {

    const old_path = files.file.filepath
    const old_file_name = files.file.originalFilename;
    const new_file_name = files.file.newFilename;
    const file_ext = old_file_name.split(".").pop();
    const new_path = "./public/files/" + new_file_name + "." + file_ext;

    fs.rename(old_path, new_path, function (err) {
      if (err) throw err;
    });

    const file = new File()
    file.name = new_file_name
    file.save();
  
    res.status(201).json(file)
  });
};
