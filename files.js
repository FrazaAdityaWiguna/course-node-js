const fs = require("fs");

// reading files
/**
 * args 1 = file path
 * args 2 = cb
 */
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// writing files
/**
 * args 1 = file path
 * args 2 = replace content
 * args 3 = cb
 */
fs.writeFile("./docs/blog1.txt", "Hello, bigdream!", () =>
  console.log("File was written")
);

fs.writeFile("./docs/blog2.txt", "Hello, pirates!", () =>
  console.log("File was written")
);

// directories

// deleting files
