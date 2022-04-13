const express = require("express");
const cors = require("cors");

const helmet = require("helmet");
const limiter = require("./ratelimit/rate.limit");
const logger = require("./logger/logger");
const res = require("express/lib/response");
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: config.get("app_status.status_check"),
  });
});

module.exports = app;
