import nav from "./utils/nav.js";

window.onload = function () {
  nav();
};

//fetch API
// async function getData() {
//   let response = await fetch("http://localhost:6456/art");
//   if (response.status == 200) {
//     return await response.json();
//   }
// }

// getData().then((response) =>
//   response.forEach((item) => {
//     const Titel = item.Titel;
//     const Kunstenaar = item.Kunstenaar;
//     const Verkoopprijs = item.Verkoopprijs;
//     const breedte = item.breedte;
//     const hoogte = item.hoogte;
//     const diepte = item.diepte;
//     const Archief = item.Archief;
//     const Hoofdkleuren = item.Hoofdkleuren;
//     const categories = item.categories;
//     const Locatie = item.Locatie;
//     const img = item.img;

//     let htmlString = "";
//     htmlString += `<div>

//   </div>`;

//     document.getElementById("").innerHTML += htmlString;
//   })
// );
