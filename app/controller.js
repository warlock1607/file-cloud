const fs = require("fs");

const upload = require("./upload");
const { uploadFolder } = require("../config");

exports.getFilesList = (req, res) => {
  fs.readdir(uploadFolder, (err, files) => {
    res.send(files);
  });
};

exports.downloadFile = (req, res) => {
  const { filename } = req.params;
  res.download(`${uploadFolder}/${filename}`);
};

exports.uploadFiles = upload.array("files");

exports.removeFile = (req, res) => {
  const { filename } = req.params;
  fs.unlink(`${uploadFolder}/${filename}`, err => {
    if (err) res.status(500).send(err);
    res.end();
  });
};
