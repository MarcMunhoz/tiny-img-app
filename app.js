const yargs = require("yargs");
const tinify = require("./tinify");

yargs.command({
  command: "tinyimg",
  describe: "Compress a image",
  builder: {
    name: {
      demandOption: true,
      describe: "Image name",
      type: "string",
    },
    type: {
      choices: ["jpg", "png"],
      default: "png",
      demandOption: true,
      describe: "Image type",
      type: "string",
    },
  },
  handler: (argv) => tinify.compress(argv.name, argv.type),
});

yargs.parse();
