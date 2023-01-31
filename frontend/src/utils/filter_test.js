import {
    getArtworkData
} from "../utils/getData.js";

import gallery from "./gallery.js";




const collage = document.getElementById("collage");
const fotografie = document.getElementById("fotografie");
const grafiek = document.getElementById("grafiek");
const illustratie = document.getElementById("illustratie");
const mixed_media = document.getElementById("mixed_media");
const ruimtelijke_werk = document.getElementById("ruimtelijk_werk");
const schilderen = document.getElementById("shilderen");
const tekenen = document.getElementById("tekenen");
const leuven = document.getElementById("leuven");
const antwerpen = document.getElementById("antwerpen");
const brussel = document.getElementById("brussel");
const kortrijk = document.getElementById("kortrijk");
const display = document.getElementById("collection-column2");
const display2 = document.getElementById("collection-column3");
const display1 = document.getElementById("collection-column1");
const display_all = document.getElementById("collection-column1" || "collection-column2" || "collection-column3")
const alles = document.getElementById("alles-kunstwerken");
const alles2 = document.getElementById("alles-locatie");


let filteredArray = [];


////////////////////// WERKT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// FILTER OP CATEGORIES

function filterArtworkData(button, data, soort, locatie) {


    button.addEventListener("change", () => {
        filteredArray = [];


        if (soort === "alles" || locatie === "alles2") {
            gallery(data)
            return
        }

        data.forEach(item => {
            if (item.categories === soort || item.Locatie === locatie) {
                filteredArray.push(item);
            }
        });
        gallery(filteredArray)
    })
}

getArtworkData().then((data) => {

    // Soort

    filterArtworkData(collage, data, "Collage");
    filterArtworkData(alles, data, "alles");
    filterArtworkData(fotografie, data, "Fotografie");
    filterArtworkData(ruimtelijke_werk, data, "Ruimtelijk werk");
    filterArtworkData(schilderen, data, "Schilderen");
    filterArtworkData(illustratie, data, "Illustratie");
    filterArtworkData(grafiek, data, "Grafiek");
    filterArtworkData(tekenen, data, "Tekenen");
    filterArtworkData(mixed_media, data, "Mixed Media");

    // Locatie 

    filterArtworkData(antwerpen, data, null, "Antwerpen");
    filterArtworkData(brussel, data, null, "Brussel");
    filterArtworkData(kortrijk, data, null, "Kortrijk");
    filterArtworkData(leuven, data, null, "Leuven");
    filterArtworkData(alles2, data, null, "alles2");

})


////////////////////// WERKT_EINDE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\








// function filterArtworkData(form, data, categories, Locatie) {


//     //    getArtworkData.categories = categories
//     //    getArtworkData.Locatie = Locatie

//     // const data = getArtworkData()

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const soort = e.target.kunstwerken.value;
//         const locatie = e.target.locatie.value;


//         data.forEach((item) => {
//             if (item.categories === categories) {
//                 filteredArray.push(item);
//             }
//         });

//         filteredArray.forEach((item) => {
//             if (item.Locatie === Locatie) {
//                 filteredArray.push(item);
//             }
//         });


//     });
//     console.log(categories)
// }









// const data = getArtworkData()

// let form = document.getElementById("filter-popup");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const categories = e.target.kunstwerken.value;
//     const Locatie = e.target.locatie.value;

//     data.forEach((item) => {
//       if (item.categories === "Collage") {
//         filteredArray.push(item);
//       }
//     });

//     filteredArray.forEach((item) => {
//       if (item.Locatie === "Brussel") {
//         filteredArray.push(item);
//       }
//     });




//     console.log("tettettst")
// });




// getArtworkData().then((data) => {
//     console.log(data)

//     collage.addEventListener("click", () => {
//         filteredArray = [];
//         display.innerHTML = "";
//         display1.innerHTML = "";
//         display2.innerHTML = "";
//         data.forEach(item => {
//             if (item.categories === "Collage") {
//                 filteredArray.push(item);
//             }
//         });
//         gallery(filteredArray)
//     })

// })









// fotografie.addEventListener("click", () => {
//     display.innerHTML = "";
//     data.forEach(item => {
//       if (item.categories === "Fotografie") {
//         display.innerHTML += `<img> src="${item.img}"`;
//       }
//     });
//   }),

//   grafiek.addEventListener("click", () => {
//     display.innerHTML = "";
//     data.forEach(item => {
//       if (item.categories === "Grafiek") {
//         display.innerHTML += `<img> src="${item.img}"`;
//       }
//     });
//   }),

//   illustratie.addEventListener("click", () => {
//     display.innerHTML = "";
//     data.forEach(item => {
//       if (item.categories === "Illustratie") {
//         display.innerHTML += `<img> src="${item.img}"`;
//       }
//     });
//   }),
//   mixed_media.addEventListener("click", () => {
//     display.innerHTML = "";
//     data.forEach(item => {
//       if (item.categories === "Mixed Media") {
//         display.innerHTML += `<img> src="${item.img}"`;
//       }
//     });
//   }),

//   ruimtelijke_werk.addEventListener("click", () => {
//     display.innerHTML = "";
//     data.forEach(item => {
//       if (item.categories === "Ruimtelijke Werk") {
//         display.innerHTML += `<img> src="${item.img}"`;
//       }
//     });
//   }),
//   tekenen.addEventListener("click", () => {
//     display.innerHTML = "";
//     data.forEach(item => {
//       if (item.categories === "Tekenen") {
//         display.innerHTML += `<img> src="${item.img}"`;
//       }
//     });
//   }),

//   schilderen.addEventListener("click", () => {
//     display.innerHTML = "";
//     data.forEach(item => {
//       if (item.categories === "Schilderen") {
//         display.innerHTML += `<img> src="${item.img}"`;
//       }
//     });
//   }));

//   console.log(item.categories)