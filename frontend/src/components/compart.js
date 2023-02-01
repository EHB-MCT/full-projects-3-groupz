import nav from "../utils/nav.js";

nav();

const compartForm = document.getElementById("compart-form");
const compartInput = document.getElementById("compart-input");
const resultContainer = document.getElementById("result-container");

let htmlString = "";

compartForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  resultContainer.innerHTML = "<p>het beeld wordt gegenereerd...</p>";
  const description = compartInput.value;
  await fetch("http://localhost:6456/generateImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description: description }),
  })
    .then((res) => res.json())
    .then((data) => {
      htmlString = `<img src="${data.imageUrl}"   />`;
      resultContainer.innerHTML = htmlString;
    });
});
