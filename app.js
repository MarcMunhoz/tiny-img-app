const yargs = require("yargs");
const tinify = require("./tinify");

yargs.command({
  command: "tinyimg",
  describe: "Compress a image",
  builder: {
    path: {
      demandOption: true,
      describe: "Image path",
      type: "string",
    },
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
  handler: (argv) => tinify.compress(argv.path, argv.name, argv.type),
});

yargs.parse();
