const express = require("express");
const app = express();
const AppError = require("./util/appError");
const globalError = require("./controllers/errorController");
const cors = require("cors");
const URLROUTE = require("./routes/api/shorten");
const REDIRECTROUTE = require("./routes/redirect");

app.use(express.json({ extended: false }));
app.use(cors());
app.get("/", (req, res) => res.send("APP IS RUNNING"));
app.get("/:url", REDIRECTROUTE);
app.use("/api/shorten", URLROUTE);
app.all("*", (req, res, next) => {
  const err = new AppError(`Cant find ${req.originalUrl} on this server`, 404);
  next(err);
});
app.use(globalError);

module.exports = app;
