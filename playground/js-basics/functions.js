// Functions move business rules into reusable blocks.
const maxRent = 1800;
const listingRents = [2100, 1500, 2500, 1800];

// A stretch limit defines how far above budget a listing can still be considered.
const stretchLimit = 300;

// Arrow function - Common for small helpers, callbacks, and React handlers.
const formatMonthlyRent = (listingRent) => `$${listingRent}/mo`;

// Regular function - Good for named business rules and can be called before its declaration.
function buildBudgetMessage(listingRent, maxRent, stretchLimit) {
  if (listingRent <= maxRent) {
    return `${formatMonthlyRent(listingRent)} - This listing perfectly fits your budget!`;
  }

  if (listingRent <= maxRent + stretchLimit) {
    return `${formatMonthlyRent(listingRent)} - This listing is close to your budget.`;
  }

  return `${formatMonthlyRent(listingRent)} - This listing is above your budget.`;
}

// for...of reuses the same business rule for every listing rent.
// Before closure - every call passes all budget settings manually.
for (const listingRent of listingRents) {
  console.log(buildBudgetMessage(listingRent, maxRent, stretchLimit));
}

// Closure - the inner function remembers maxRent and stretchLimit.
// After closure - the checker already remembers the budget settings.
function createBudgetChecker(maxRent, stretchLimit) {
  // Anonymous inner function - returned as a value and called later.
  return function (listingPrice) {
    return buildBudgetMessage(listingPrice, maxRent, stretchLimit);
  };
}

// The checker is configured once and reused for different listing prices.
const budgetChecker = createBudgetChecker(maxRent, stretchLimit);

for (const listingRent of listingRents) {
  console.log(budgetChecker(listingRent));
}
