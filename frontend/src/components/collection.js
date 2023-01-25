import nav from "../utils/nav.js";
import { getArtworkData } from "../utils/getData.js";
import filter from "../utils/filter.js"; 

nav();

const filterBtn = document.getElementById("filter-btn-container");
const filterCloseBtn = document.getElementById("filter-close-btn");
const filterPopupBg = document.getElementById("filter-popup-bg");
const filterPopup = document.getElementById("filter-popup");
filter(filterBtn, filterCloseBtn, filterPopupBg, filterPopup);

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
  // console.log(response);
  response.forEach((artwork) => {
    if (c1Counter <= c2Counter && c1Counter <= c3Counter) {
      c1String += `<img src="${artwork.img}" />`;
      c1Counter++;
    } else if (c2Counter <= c3Counter && c2Counter <= c1Counter) {
      c2String += `<img src="${artwork.img}" />`;
      c2Counter++;
    } else if (c3Counter <= c1Counter && c3Counter <= c2Counter) {
      c3String += `<img src="${artwork.img}" />`;
      c3Counter++;
    }
  });

  collectionC1.innerHTML = c1String;
  collectionC2.innerHTML = c2String;
  collectionC3.innerHTML = c3String;
});


