const debug = require("debug")("things:server");
const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const { notFoundError, generalError } = require("./middlewares/errors");
const thingsRouter = require("./routers/thingsRouter");

const app = express();

let isEditingAllowed;

const startServer = (port, allowEdit) => {
  isEditingAllowed = allowEdit;
  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.greenBright(`Server listening on http://localhost:${port}`));
      resolve();
    });

    server.on("error", (error) => {
      const errorMessage = `Couldn't start the server.${
        error.code === "EADDRINUSE" ? ` Port ${port} busy` : ""
      }`;
      reject(new Error(errorMessage));
    });
  });
};

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  if (!isEditingAllowed && req.method !== "GET") {
    res.status(403);
    res.json({ error: "Database is in read-only mode!" });
    return;
  }
  next();
});

app.use("/things", thingsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = startServer;
