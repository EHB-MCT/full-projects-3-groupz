import nav from "../utils/nav.js";
import { getArtworkData } from "../utils/getData.js";
import filterPopup from "../utils/filterPopup.js";
import gallery from "../utils/gallery.js";

nav();

const filterBtn = document.getElementById("filter-btn-container");
const filterPopupBg = document.getElementById("filter-popup-bg");
const filterPopupContainer = document.getElementById("filter-popup");
filterPopup(filterBtn, filterPopupBg, filterPopupContainer);

// const collectionC1 = document.getElementById("collection-column1");
// const collectionC2 = document.getElementById("collection-column2");
// const collectionC3 = document.getElementById("collection-column3");

// let c1Counter = 0;
// let c2Counter = 0;
// let c3Counter = 0;

// let c1String = "";
// let c2String = "";
// let c3String = "";

getArtworkData().then((response) => gallery(response));
