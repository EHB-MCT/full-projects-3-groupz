import nav from "../utils/nav.js";
import { getArtworkData } from "../utils/getData.js";
import filterPopup from "../utils/filterPopup.js";
import imgPopup from "../utils/imgPopup.js";

nav();

const filterBtn = document.getElementById("filter-btn-container");
const filterCloseBtn = document.getElementById("filter-close-btn");
const filterPopupBg = document.getElementById("filter-popup-bg");
const filterPopupContainer = document.getElementById("filter-popup");
filterPopup(filterBtn, filterCloseBtn, filterPopupBg, filterPopupContainer);

const collectionC1 = document.getElementById("collection-column1");
const collectionC2 = document.getElementById("collection-column2");
const collectionC3 = document.getElementById("collection-column3");

let c1Counter = 0;
let c2Counter = 0;
let c3Counter = 0;

let c1String = "";
let c2String = "";
let c3String = "";

getArtworkData().then((response) => {
  console.log(response);
  response.forEach((artwork) => {
    if (c1Counter <= c2Counter && c1Counter <= c3Counter) {
      c1String += `<img class="artwork" src="${artwork.img}" data-title="${artwork.Titel}" data-artist="${artwork.Kunstenaar}" data-price="${artwork.Verkoopprijs}" data-height="${artwork.hoogte}" data-width="${artwork.breedte}"  />`;
      c1Counter++;
    } else if (c2Counter <= c3Counter && c2Counter <= c1Counter) {
      c2String += `<img class="artwork" src="${artwork.img}" data-title="${artwork.Titel}" data-artist="${artwork.Kunstenaar}" data-price="${artwork.Verkoopprijs}" data-height="${artwork.hoogte}" data-width="${artwork.breedte}"  />`;
      c2Counter++;
    } else if (c3Counter <= c1Counter && c3Counter <= c2Counter) {
      c3String += `<img class="artwork" src="${artwork.img}" data-title="${artwork.Titel}" data-artist="${artwork.Kunstenaar}" data-price="${artwork.Verkoopprijs}" data-height="${artwork.hoogte}" data-width="${artwork.breedte}"  />`;
      c3Counter++;
    }
  });

  collectionC1.innerHTML = c1String;
  collectionC2.innerHTML = c2String;
  collectionC3.innerHTML = c3String;

  let artworkImages = document.querySelectorAll(".artwork");
  artworkImages.forEach((image) => {
    image.addEventListener("click", (e) => {
      e.preventDefault();
      const artworkTitle = e.target.getAttribute("data-title");
      const artworkArtist = e.target.getAttribute("data-artist");
      const artworkPrice = e.target.getAttribute("data-price");
      const artworkHeight = e.target.getAttribute("data-height");
      const artworkWidth = e.target.getAttribute("data-width");
      const artworkImage = e.target.src;
      imgPopup(
        artworkTitle,
        artworkArtist,
        artworkPrice,
        artworkHeight,
        artworkWidth,
        artworkImage
      );
    });
  });
});
