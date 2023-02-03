import nav from "../utils/nav.js";
nav();

const compartForm = document.getElementById("compart-form");
const compartInput = document.getElementById("compart-input");
const compartColumn1 = document.getElementById("compart-column1");
const compartColumn2 = document.getElementById("compart-column2");
const loadingContainer = document.getElementById("loading-container");

compartForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loadingContainer.style.display = "block";
  let c1Counter = 0;
  let c2Counter = 0;

  let c1String = "";
  let c2String = "";

  compartColumn1.innerHTML = "";
  compartColumn2.innerHTML = "";
  const description = compartInput.value;
  // await fetch("http://localhost:6456/generateImage", {
  await fetch("https://kunstinhuis.onrender.com/generateImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description: description }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((img) => {
        if (c1Counter <= c2Counter) {
          c1String += `<img class="artwork" src="${img.url}" />`;
          c1Counter++;
        } else {
          c2String += `<img class="artwork" src="${img.url}" />`;
          c2Counter++;
        }
        console.log(img.url);
      });
      loadingContainer.remove();
      compartColumn1.innerHTML = c1String;
      compartColumn2.innerHTML = c2String;
    });
});
