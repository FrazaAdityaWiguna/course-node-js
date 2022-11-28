const people = ["Fraza", "Nada", "Dihas", "Erik"];
const ages = [20, 21, 20, 20];

console.log(people);

// Single Export
// module.exports = people;

// Multiple Export
module.exports = { people, ages };
