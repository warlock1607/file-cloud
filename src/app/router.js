const router = require('express').Router();

const { getFilesList, downloadFile, uploadFiles, removeFile } = require("./controller");

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

/**
 * Возвращает список файлов, если их нет, пустой массив
 */
router.get("/files", getFilesList);

/**
 * 200 - файл найден, начинается загрузка
 * 404 - файл не найден
 */
router.get('/files/:filename', downloadFile);

/**
 * 200 - файл найден, удалён
 * 404 - файл не найден
 */
router.get('/remove/:filename', removeFile);

/**
 * При успешной загрузке возвращает 200
 */
router.post('/upload', uploadFiles, (req, res) => {
  res.end();
});

module.exports = router;