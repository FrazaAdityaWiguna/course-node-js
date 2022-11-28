const fs = require("fs");

// reading files
/**
 * args 1 = file path
 * args 2 = cb
 */
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("last line");

// writing files

// directories

// deleting files
