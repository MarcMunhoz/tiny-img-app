const fs = require("fs");
require("dotenv").config();
const tinify = require("tinify");
const chalk = require("chalk");

tinify.key = process.env.API_KEY;

const success = chalk.green;
const error = chalk.red;

const compress = (path, name, type) => {
  const fullpath = path + name + "." + type;

  fs.readFile(fullpath, function (err, sourceData) {
    if (err) throw error(err);

    tinify.fromBuffer(sourceData).toBuffer(function (err, resultData) {
      if (err) throw error(err);

      fs.writeFileSync(path + name + ".min." + type, resultData, { encoding: "binary" });

      console.log(success("Image compressed!"));
    });
  });
};

module.exports = {
  compress: compress,
};
