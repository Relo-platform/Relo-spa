const relocationPlan = {
  city: "Pensacola",
  moveDate: "2029-06-25",
  budget: 2000,
  mustHaves: ["close to water", "safe area", "garage"],
};

// querySelector finds the first DOM element matching the CSS selector.
const titleElement = document.querySelector("#page-title");
const cityElement = document.querySelector("#relocation-city");
const dateElement = document.querySelector("#relocation-date");
const budgetElement = document.querySelector("#budget");
const mustHavesElement = document.querySelector("#must-haves");
const mustHavesListElement = document.querySelector("#must-haves-list");

// textContent updates the visible text inside an element.
titleElement.textContent = "Relo Dashboard";
cityElement.textContent = relocationPlan.city;
dateElement.textContent = relocationPlan.moveDate;
budgetElement.textContent = `$${relocationPlan.budget}/mo`;
mustHavesElement.textContent = "Your must-haves:";

// createElement builds a new DOM element in memory.
// appendChild inserts that new element into a parent element on the page.
for (const item of relocationPlan.mustHaves) {
  const listItemElement = document.createElement("li");
  listItemElement.textContent = item;
  mustHavesListElement.appendChild(listItemElement);
}

const safeBudgetLimit = 2500;

if (relocationPlan.budget <= safeBudgetLimit) {
  budgetElement.classList.add("safe-budget");
} else {
  budgetElement.classList.add("warning-budget");
}
