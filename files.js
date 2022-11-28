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
// fs.writeFile("./docs/blog1.txt", "Hello, bigdream!", () =>
//   console.log("File was written")
// );

// fs.writeFile("./docs/blog2.txt", "Hello, pirates!", () =>
//   console.log("File was written")
// );

// directories
// if (!fs.existsSync("./assets")) {
//   /**
//    * args 1 = file name
//    * args 2 = cb
//    */
//   fs.mkdir("./assets", () => {
//     console.log("file created");
//   });
// } else {
//   /**
//    * args 1 = file name
//    * args 2 = cb
//    */
//   fs.rmdir("./assets", (err) => {
//     if (err) console.log(err);
//     console.log("folder deleted");
//   });
// }

// deleting files
// if (!fs.existsSync("./docs/deteleme.txt")) {
//   fs.writeFile("./docs/deteleme.txt", "Delete file", (err) => {
//     if (err) console.log(err);
//     console.log("file created");
//   });
// } else {
//   fs.unlink("./docs/deteleme.txt", (err) => {
//     if (err) console.log(err);
//     console.log("file deleted");
//   });
// }
