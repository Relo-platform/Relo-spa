const mustHaves = ["close to water", "safe area", "garage"];

const mustHavesTitleElement = document.querySelector("#must-haves-title");
const mustHavesListElement = document.querySelector("#must-haves-list");
const toggleButtonElement = document.querySelector("#must-haves-button");

toggleButtonElement.textContent = "Show must-haves";

let isMustHavesVisible = false;

toggleButtonElement.addEventListener("click", () => {
  // Toggle state first, then update the UI from that state.
  isMustHavesVisible = !isMustHavesVisible;

  // Clear previous list items before rendering again.
  mustHavesListElement.textContent = "";

  if (isMustHavesVisible) {
    // Render each must-have as a separate list item.
    mustHavesTitleElement.textContent = "Your must-haves:";

    for (const item of mustHaves) {
      const listItemElement = document.createElement("li");
      listItemElement.textContent = item;
      mustHavesListElement.appendChild(listItemElement);
    }

    toggleButtonElement.textContent = "Hide must-haves";
  } else {
    toggleButtonElement.textContent = "Show must-haves";
    mustHavesTitleElement.textContent = "";
    mustHavesListElement.textContent = "";
  }
});
