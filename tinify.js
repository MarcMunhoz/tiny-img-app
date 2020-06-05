const fs = require("fs");
require("dotenv").config();
const tinify = require("tinify");
const chalk = require("chalk");

tinify.key = process.env.API_KEY;

const success = chalk.green;
const info = chalk.blue;
const danger = chalk.orange;
const error = chalk.red;

const compress = (path, name, type) => {
  const fullpath = path + name + "." + type;

  fs.readFile(fullpath, function (err, sourceData) {
    if (err) throw error(err);

    tinify.fromBuffer(sourceData).toBuffer(function (err, resultData) {
      if (err) throw error(err);

      let availableCompressionsThisMonth = 500 - tinify.compressionCount;

      fs.writeFileSync(path + name + ".min." + type, resultData, { encoding: "binary" });

      console.log(success("Image compressed!"));

      availableCompressionsThisMonth <= 10 ? console.log(danger("You've only " + availableCompressionsThisMonth + " compressions available this month.")) : console.log(info("You've " + availableCompressionsThisMonth + " compressions available this month."));
    });
  });
};

module.exports = {
  compress: compress,
};
