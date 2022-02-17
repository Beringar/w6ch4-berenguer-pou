const inquirer = require("inquirer");
const { portValidator } = require("port-validator");
const debug = require("debug")("things:getUserChoices");

const getUserChoices = () =>
  new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          name: "port",
          message: "Define a port number to start server",
          type: "input",
          default: 4000,
          validate: async (port) => {
            debug(port, typeof port);
            if (!portValidator(port).validate()) {
              return "Invalid port!";
            }
            return true;
          },
        },
        {
          name: "dbOption",
          type: "list",
          choices: ["Development", "Production"],
        },

        {
          name: "allowEdit",
          message: "Allow clients to edit Database",
          type: "confirm",
        },
      ])
      .then(({ port, dbOption, allowEdit }) => {
        resolve({
          port,
          dbOption,
          allowEdit,
        });
      });
  });

module.exports = getUserChoices;
