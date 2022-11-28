// Single Import
// const xyz = require("./people");

// console.log(xyz);

// Multiple import
const { people, ages } = require("./people");
const os = require("os");

console.log(people);
console.log(ages);
console.log(os.platform(), os.homedir());
