const relocationPlan = {
  city: "Pensacola",
  moveDate: "2029-06-25",
  budget: 2100,
  hasPartner: true,
  selectedNeighborhood: "Southwest Pensacola",
  mustHaves: ["close to water", "safe area", "garage"],
};

const listingRents = [1500, 1800, 2500, 2100, 3000];

// A stretch limit defines how far above budget a listing can still be considered.
const stretchLimit = 300;

// Arrow function - Small formatting helpers keep UI messages consistent.
const formatMonthlyRent = (price) => `$${price}/mo`;

// Regular function - Early returns keep business rules flat and readable.
function buildBudgetMessage(price, maxBudget, stretchLimit) {
  if (price <= maxBudget) {
    return `${formatMonthlyRent(price)} perfectly fits your budget!`;
  }

  if (price <= maxBudget + stretchLimit) {
    return `${formatMonthlyRent(price)} is close to your budget.`;
  }

  return `${formatMonthlyRent(price)} is above your budget.`;
}

// Closure - the returned function remembers budget and stretchLimit.
function createBudgetChecker(budget, stretchLimit) {
  // Anonymous inner function - returned as a value and called later.
  return function (listingPrice) {
    return buildBudgetMessage(listingPrice, budget, stretchLimit);
  };
}

// The checker is configured once from the relocation plan and reused later.
const checkCompatibility = createBudgetChecker(relocationPlan.budget, stretchLimit);

console.log(checkCompatibility(2500));

// Template strings interpolate plan fields into a dashboard summary.
console.log(
  `${relocationPlan.city} move planned for ${relocationPlan.moveDate} with ${formatMonthlyRent(relocationPlan.budget)} budget.`
);

// Object spread creates an updated copy without mutating the original plan.
const updatedRelocationPlan = {
  ...relocationPlan,
  budget: 2400,
};

console.log(updatedRelocationPlan);

// Rest collects all fields except city into otherPlanDetails.
const { city: updatedCity, ...otherPlanDetails } = updatedRelocationPlan;

console.log(
  `
${updatedCity} move is planned. Other details are:
  budget: ${formatMonthlyRent(otherPlanDetails.budget)},
  with partner: ${otherPlanDetails.hasPartner},
  move date: ${otherPlanDetails.moveDate},
  selected neighborhood: ${otherPlanDetails.selectedNeighborhood},
  mandatory criteria: ${otherPlanDetails.mustHaves}.
`
);

// for...of reuses the configured checker for every listing rent.
for (const listingRent of listingRents) {
  console.log(checkCompatibility(listingRent));
}
