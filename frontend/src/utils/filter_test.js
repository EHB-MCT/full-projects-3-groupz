import {
    getArtworkData
} from "../utils/getData.js";


const collage = document.getElementById("collage");
const fotografie = document.getElementById("fotografie");
const grafiek = document.getElementById("grafiek");
const illustratie = document.getElementById("illustratie");
const mixed_media = document.getElementById("mixed_media");
const ruimtelijke_werk = document.getElementById("ruimtelijke_werk");
const schilderen = document.getElementById("schilderen");
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

// FILTER OP CATEGORIES

getArtworkData().then((data) => {
    console.log(data)

    collage.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display2.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Collage") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})

getArtworkData().then((data) => {
    console.log(data)

    alles.addEventListener("click", () => {
       
        display_all.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Collage" || "Fotografie" || "Grafiek" || "Tekenen" || "Illustratie" || "Mixed Media" || "Ruimtelijk werk" || "Schilderen") {
                display_all.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})



getArtworkData().then((data) => {
    console.log(data)

    alles2.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display2.innerHTML = "";
        display_all.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Collage" || "Fotografie" || "Grafiek" || "Tekenen" || "Illustratie" || "Mixed Media" || "Ruimtelijk werk" || "Schilderen") {
                display_all.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})



getArtworkData().then((data) => {
    console.log(data)

    fotografie.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Fotografie") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        }); 
    })

})


getArtworkData().then((data) => {
    console.log(data)

    grafiek.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Grafiek") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})

getArtworkData().then((data) => {
    console.log(data)

    illustratie.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Illustratie") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})

getArtworkData().then((data) => {
    console.log(data)

    mixed_media.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Mixed Media") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})

getArtworkData().then((data) => {
    console.log(data)

    ruimtelijke_werk.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Ruimtelijk werk") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})

getArtworkData().then((data) => {
    console.log(data)

    schilderen.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Schilderen") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})

getArtworkData().then((data) => {
    console.log(data)

    tekenen.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Tekenen") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})

getArtworkData().then((data) => {
    console.log(data)

    over.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.categories === "Fotografie") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})

// FILTER OP LOCATIE 

getArtworkData().then((data) => {
    console.log(data)

    brussel.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.Locatie === "Brussel") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})

getArtworkData().then((data) => {
    console.log(data)

    leuven.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.Locatie === "Leuven") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})
getArtworkData().then((data) => {
    console.log(data)

    kortrijk.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.Locatie === "Kortijk") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })

})
getArtworkData().then((data) => {
    console.log(data)

    antwerpen.addEventListener("click", () => {
        display.innerHTML = "";
        display1.innerHTML = "";
        display.innerHTML = "";
        data.forEach(item => {
            if (item.Locatie === "Antwerpen") {
                display.innerHTML += `<img src="${item.img}"> `;
            }
        });
    })
})








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