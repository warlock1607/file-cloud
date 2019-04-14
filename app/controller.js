const fs = require("fs");

const { uploadFolder } = require('../config');

exports.getFilesList = (req, res) => {
  fs.readdir(uploadFolder, (err, files) => {
    res.send(files);
  });
};

exports.downloadFile = (req, res) => {
  const { filename } = req.params;
  res.download(`${uploadFolder}/${filename}`);  
}