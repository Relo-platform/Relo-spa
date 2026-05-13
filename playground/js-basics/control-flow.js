const maxRent = 1800;
const listingRent = 2100;
const stretchLimit = 300;

// Conditions help the app decide what message to show for a listing.
if (maxRent >= listingRent) {
  console.log("This listing perfectly fits your budget!");
} else if ((maxRent + stretchLimit) >= listingRent) {
  console.log("This listing is close to your budget.");
} else {
  console.log("This listing is above your budget.");
};

// Loops let the app apply the same rule to a list of values.
const listingRents = [2100, 1500, 3000, 1800];

// for...of is used to read each item from an array.
for (const listingRent of listingRents) {
  if (maxRent >= listingRent) {
    console.log(`$${listingRent} - This listing perfectly fits your budget!`);
  } else if ((maxRent + stretchLimit) >= listingRent) {
    console.log(`$${listingRent} - This listing is close to your budget.`);
  } else {
    console.log(`$${listingRent} - This listing is above your budget.`);
  }
}