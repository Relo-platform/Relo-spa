const relocationPlan = {
  city: "Pensacola",
  budget: 21000,
  moveDate: "2029-06-25",
};

// Object destructuring extracts fields into local variables.
const { city, budget, moveDate } = relocationPlan;

// Template strings interpolate variables with ${}.
console.log(`${city} move planned for ${moveDate} with $${budget} budget.`);

// Object spread creates a new object by copying the old fields first.
const updatedRelocationPlan = {
  ...relocationPlan,
  budget: 25000,
};

// Destructuring aliases avoid name conflicts in the same scope.
const {
  city: updatedCity,
  budget: updatedBudget,
  moveDate: updatedMoveDate,
} = updatedRelocationPlan;

console.log(
  `${updatedCity} move planned for ${updatedMoveDate} with $${updatedBudget} budget.`
);

// Rest collects the remaining fields during destructuring.
const { city: separateCity, ...otherDetails } = relocationPlan;

console.log(
  `${separateCity} move is planned! Other details: budget: ${otherDetails.budget}, date: ${otherDetails.moveDate}.`
);
