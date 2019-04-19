// File manipulation via express request handlers

const fs = require("fs");
const upload = require("./upload");
const { uploadFolder } = require("../config");

/**
 * Get list of files from upload folder
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {Array} array of names of uploaded files or empty array if files aren't exist
 * @returns {express.Response.status} code 500 - internal error
 */
exports.getFilesList = (req, res) => {
  fs.readdir(uploadFolder, (err, files) => {
    res.send(files);
  });
};

/**
 * Download file with name from req.params.filename from upload folder
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {File} file with name from req.params.filename
 * @returns {express.Response.status} code 404 - file doesn't exist
 */
exports.downloadFile = (req, res) => {
  const { filename } = req.params;
  res.download(`${uploadFolder}/${filename}`);
};

/**
 * Upload Files from multipart/form-data form via multer
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.uploadFiles = upload.array("files");

/**
 * Remove file with name from req.params.filename from upload folder
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {express.Response.status} 200 - file removed, 404 - file doesn't exist
 */
exports.removeFile = (req, res) => {
  const { filename } = req.params;
  fs.unlink(`${uploadFolder}/${filename}`, err => {
    if (err) res.status(404).send(err);
    res.end();
  });
};
