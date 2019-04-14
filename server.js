const express = require("express");

const app = express();

const { port, uploadFolder } = require("./config");

const { getFilesList, downloadFile } = require("./app/controller");

app.use('/static', express.static(uploadFolder));

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/api/files", getFilesList);

app.get('/api/files/:filename', downloadFile);

app.listen(port, () => console.log(`App started at port ${port}`));
