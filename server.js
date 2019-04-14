const express = require("express");

const app = express();

const { port } = require("./config");

const { getFilesList } = require("./app/controller");

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/api/files", getFilesList);

app.listen(port, () => console.log(`App started at port ${port}`));
