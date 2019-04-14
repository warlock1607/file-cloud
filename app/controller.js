const fs = require("fs");

const { uploadFolder } = require('../config');

exports.getFilesList = (req, res) => {
  fs.readdir(uploadFolder, (err, files) => {
    res.send(files);
  });
};
