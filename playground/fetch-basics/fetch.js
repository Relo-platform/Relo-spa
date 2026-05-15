const loadButtonElement = document.querySelector("#load-button");
loadButtonElement.textContent = "Load listings";

const loadingStatusElement = document.querySelector("#loading-status");
const listingsListElement = document.querySelector("#listings-list");
const listingsInfoElement = document.querySelector("#loading-info");

// wait turns setTimeout into a Promise, so it can be used with await.
const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

async function loadAndRenderListings() {
  try {
    // fetch returns a Promise for the HTTP response.
    const response = await fetch("./listings.json");

    // response.json() parses the response body into JS data.
    const listings = await response.json();

    listingsInfoElement.textContent = "Listings loaded. Preparing results...";

    await wait(2000);

    for (const listing of listings) {
      const listItemElement = document.createElement("li");
      listItemElement.textContent = `${listing.title} with total rent: $${listing.rent}`;
      listingsListElement.appendChild(listItemElement);
    }

    listingsInfoElement.textContent = "Done!";
    loadingStatusElement.textContent = "";
  } catch (error) {
    // Log the raw error for developers, show a friendly message to users.
    console.error(error);
    loadingStatusElement.textContent = "";
    listingsInfoElement.textContent = "Could not load listings. Please try again.";
  }
}

loadButtonElement.addEventListener("click", async () => {
  loadingStatusElement.textContent = "Loading listings...";
  listingsInfoElement.textContent = "";
  listingsListElement.textContent = "";

  await loadAndRenderListings();
});
