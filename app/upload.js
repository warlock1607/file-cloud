const multer = require("multer");
const { uploadFolder } = require("../config");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder + '/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
