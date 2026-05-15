// Objects group related data, like a Ruby hash.

const relocationPlan = {
  targetCity: "Pensacola",
  moveDate: "2029-06-25",
  budget: 25000,
  hasPartner: true,
  selectedNeighborhood: "Southwest Pensacola",
  mustHaves: ["close to water", "safe area", "garage"],
};

console.log(relocationPlan);
console.log(relocationPlan.targetCity);
console.log(relocationPlan.budget);
console.log(relocationPlan.mustHaves[0]);

// const prevents reassignment, but object fields can still change.
relocationPlan.budget = 27000;

console.log(relocationPlan.budget);