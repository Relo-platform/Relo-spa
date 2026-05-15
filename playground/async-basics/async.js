const listings = ["Downtown apartment", "Waterfront studio"];

console.log("Loading listings with async/await...");

// Promise means: this value will be available later.
const listingsPromise = new Promise((resolve) => {
  setTimeout(() => {
    // resolve completes the promise successfully and passes data to whoever awaits it.
    resolve(listings);
  }, 1000);
});

async function loadListings() {
  // await pauses this async function until the promise resolves.
  const loadedListings = await listingsPromise;
  console.log(loadedListings.join(", "));
}

// .then is another way to handle the same resolved promise.
listingsPromise.then((loadedListings) => {
  console.log(loadedListings.join(", "));
});

loadListings();

console.log("Loading listings with error handling...");

// reject completes the promise as failed and sends the error to catch.
const failedListingsPromise = new Promise((_resolve, reject) => {
  setTimeout(() => {
    reject("Failed to load listings");
  }, 1000);
});

async function loadListingsWithErrorHandling() {
  try {
    const loadedListings = await failedListingsPromise;
    console.log(loadedListings);
  } catch (error) {
    console.log(`Failed - from catch: ${error}`);
  }
}

loadListingsWithErrorHandling();
