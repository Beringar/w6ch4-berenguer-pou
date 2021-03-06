const inquirer = require("inquirer");
const { portValidator } = require("port-validator");

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
            if (!portValidator(port).validate()) {
              return "Invalid port!";
            }
            return true;
          },
        },
        {
          name: "dbOption",
          message: "Choose the database you want to use:",
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
      })
      .catch((error) => reject(new Error(error)));
  });

module.exports = getUserChoices;
