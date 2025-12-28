const express = require("express");
const mainRouter = require("./routes/index");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(8080);

