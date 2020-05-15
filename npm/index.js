#!/usr/bin/env node

const program = require("commander");
const request = require("request");
const fs = require("fs");

const gitRepo = "https://github.com/walkingp/miscss";
const fileUrl =
  "https://raw.githubusercontent.com/walkingp/miscss/master/release/mi.scss";

function downloadFile(uri, filename, callback) {
  const stream = fs.createWriteStream(filename);
  request(uri)
    .pipe(stream)
    .on("close", callback);
}

const filename = "mi.scss";

program
  .command("init")
  .description("Downloading file")
  .action(() => {
    downloadFile(fileUrl, filename, function() {
      console.log(filename + " downloaded");
      console.log(
        `Please visit Github homepage to view more details: ${gitRepo}`
      );
    });
  });

program.parse(process.argv);
