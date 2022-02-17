require("dotenv").config();
const debug = require("debug")("things:root");
const chalk = require("chalk");

const getUserChoices = require("./utils/getUserChoices");

(async () => {
  const { port, dbOption, allowEdit } = await getUserChoices();

  debug(
    chalk.greenBright(
      `Port: ${port} Chosen database: ${dbOption}, Allow editing: ${allowEdit}`
    )
  );
})();
