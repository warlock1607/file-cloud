// Express router providing file manipulations

const router = require("express").Router();

const {
  getFilesList,
  downloadFile,
  uploadFiles,
  removeFile
} = require("./controller");

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// responce description in app/controller.js

router.get("/files", getFilesList);

router.get("/files/:filename", downloadFile);

router.get("/remove/:filename", removeFile);

router.post("/upload", uploadFiles, (req, res) => {
  res.end();
});

module.exports = router;
