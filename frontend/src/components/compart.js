import nav from "../utils/nav.js";
import { getArtworkData } from "../utils/getData.js";
nav();

const compartForm = document.getElementById("compart-form");
const compartInput = document.getElementById("compart-input");
const resultContainer = document.getElementById("result-container");

let htmlString = "";

compartForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  resultContainer.innerHTML = "<p>het beeld wordt gegenereerd...</p>";
  const description = compartInput.value;
  await fetch("https://kunstinhuis.onrender.com/generateImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description: description }),
  })
    .then((res) => res.json())
    .then((data) => {
      let img = data.imageUrl;

      htmlString = `<img src="${img}"/>`;
      resultContainer.innerHTML = htmlString;

      let imagesData = {
        imageUrl: img,
      };

      console.log(imagesData);

      fetch("http://localhost:8080/uploadImageUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(imagesData),
      })
        .then(
          (response) => {
            console.log(response);
            response.json();
          } // if the response is a JSON object
        )
        .then(
          (success) => console.log(success) // Handle the success response object
        )
        .catch(
          (error) => console.log(error) // Handle the error response object
        );
    });
});
