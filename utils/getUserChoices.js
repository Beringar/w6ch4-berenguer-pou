const inquirer = require("inquirer");

const getUserChoices = () =>
  new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          name: "port",
          message: "Define a port number to start server",
          type: "integer",
          default: 4000,
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
