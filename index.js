require("dotenv").config();
const debug = require("debug")("things:root");
const chalk = require("chalk");

const getUserChoices = require("./utils/getUserChoices");
const connectToMongoDatabase = require("./db");
const startServer = require("./server");

(async () => {
  try {
    const { port, dbOption, allowEdit } = await getUserChoices();
    debug(
      chalk.yellowBright(
        `Port: ${port} Chosen database: ${dbOption}, Allow editing: ${allowEdit}`
      )
    );
    const mongoConnectionString =
      dbOption === "Production"
        ? process.env.MONGO_PROD
        : process.env.MONGO_DEV;
    connectToMongoDatabase(mongoConnectionString);
    startServer(port, allowEdit);
  } catch (error) {
    debug(chalk.redBright(error));
  }
})();
