const fs = require("fs");
require("dotenv").config();
const tinify = require("tinify");
const chalk = require("chalk");

tinify.key = process.env.API_KEY;

const success = chalk.green;
const error = chalk.red;

const compress = (name, type) => {
  const file = name + "." + type;
  fs.readFile(file, function (err, sourceData) {
    if (err) throw error(err);

    tinify.fromBuffer(sourceData).toBuffer(function (err, resultData) {
      if (err) throw error(err);

      fs.writeFileSync("compressed-" + file, resultData, { encoding: "binary" });

      console.log(success("Image compressed!"));
    });
  });
};

module.exports = {
  compress: compress,
};
