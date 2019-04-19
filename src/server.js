const express = require("express");

const app = express();

const { port } = require("./config");

const router = require("./app/router");

app.use('/', router);

app.listen(port, () => console.log(`App started at port ${port}`));
