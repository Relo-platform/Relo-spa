// Arrays store ordered lists of values, like Ruby arrays.
const mustHaves = ["parking", "safe area", "close to work"];

console.log(mustHaves);

// Indexes start at 0 in JS, same as Ruby arrays.
console.log(mustHaves[0]);

// .length returns how many items are in the array.
console.log(mustHaves.length);

// const prevents reassignment, but the array contents can still change.
mustHaves.push("close to water");

console.log(mustHaves);

// for...of is the common simple loop for reading array items.
for (const item of mustHaves) {
  console.log(item);
}

// map returns a new array without changing the original array.
const prices = [1000, 1500, 2000];

const pricesWithFee = prices.map((price) => {
  return price + 100;
});

console.log(pricesWithFee);
