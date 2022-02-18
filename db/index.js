const debug = require("debug")("things:db");
const mongoose = require("mongoose");
const chalk = require("chalk");

const connectToMongoDatabase = (connectionString, databaseName) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionString, (error) => {
      if (error) {
        reject(new Error(`Couldn't connect to the database: ${error.message}`));
        return;
      }
      debug(chalk.greenBright(`Connected to ${databaseName} Database`));
      resolve();
    });
  });

module.exports = connectToMongoDatabase;
