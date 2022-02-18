const debug = require("debug")("things:server:middlewares:errors");
const chalk = require("chalk");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ error: "Not found" });
};

const generalError = (err, req, res, next) => {
  debug(chalk.redBright("Something went very bad!"));
  res.status(500);
  res.json({ error: "General error. Something went very bad." });
};

module.exports = {
  notFoundError,
  generalError,
};
