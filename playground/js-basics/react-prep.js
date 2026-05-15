const listings = [
  { id: 1, title: "Downtown Apartment", price: 1500, hasGarage: false },
  { id: 2, title: "Waterfront Studio", price: 2000, hasGarage: true },
  { id: 3, title: "Suburban House", price: 2500, hasGarage: true },
];

console.log("--- TASK 1: Filter ---");
// Task: create `listingsWithGarage` array with only listings where hasGarage is true.
const listingsWithGarage = listings.filter( listing => listing.hasGarage );
console.log(listingsWithGarage);


console.log("\n--- TASK 2: Find ---");
// Task: find listing with id 2 and store it in `selectedListing`.
const selectedListing = listings.find( listing => listing.id === 2);
console.log(selectedListing);

console.log("\n--- TASK 3: Reduce ---");
// Task: calculate the total price of all listings combined and store in `totalCost`.
const totalCost = listings.reduce((sum, listing) => sum + listing.price, 0);

console.log(totalCost)


console.log("\n--- TASK 4: Ternary & && ---");
const userBudget = 2200;
const targetListing = listings[2];

// Task 4.1: use ternary (? :) to console.log "Can afford" if budget >= price, else "Cannot afford"
const statusChecker = userBudget >= targetListing.price ? 'Can afford' : 'Cannot afford'
console.log(statusChecker)

// Task 4.2: use && to console.log "Has garage!" ONLY IF targetListing.hasGarage is true
const garageChecker = targetListing.hasGarage && "Has garage!"
console.log(garageChecker)
