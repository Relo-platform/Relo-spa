// const is the default when the variable should not be reassigned.
const targetCity = "Pensacola";
const moveDate = "2029-07-15";
const hasPartner = true;

// let is used when the value can change later.
let budget = 15000;

// null means: intentionally empty for now.
let selectedNeighborhood = null;

// undefined means: declared, but no value assigned yet.
let selectedSchool;

console.log("variables:\n");

console.log(targetCity);
console.log(moveDate);
console.log(budget);
console.log(hasPartner);
console.log(selectedNeighborhood);
console.log(selectedSchool);

// Reassignment works because budget was declared with let.
budget = 25000;

console.log(budget);

console.log("\ntypeof:\n");

// typeof shows the JS type; typeof null is a known old JS quirk: "object".
console.log(typeof targetCity);
console.log(typeof moveDate);
console.log(typeof budget);
console.log(typeof hasPartner);
console.log(typeof selectedNeighborhood);
console.log(typeof selectedSchool);
