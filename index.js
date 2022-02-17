const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "port",
      message: "Define a port number to start server",
      type: "integer",

      default: 4000,
    },
    {
      name: "db_option",
      type: "list",
      choices: ["Development", "Production"],
    },
    {
      name: "allow_edit",
      message: "Allow clients to edit Database",
      type: "confirm",
    },
  ])
  .then(function (answer) {
    console.log(answer.port);
    console.log(answer.db_option);
    console.log(answer.allow_edit);
  });
