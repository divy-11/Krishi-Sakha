const express = require("express");
const mainRouter = require("./routes/index");
const app = express();
const cors = require("cors");
const WHITELIST_URL=process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
    origin: WHITELIST_URL,
    credentials: true
}));
app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(8080);

