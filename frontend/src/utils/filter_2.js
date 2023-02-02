import {
  getArtworkData
} from "../utils/getData.js";


getArtworkData();

console.log("test_link")



const collage = document.getElementById("collage");
const fotografie = document.getElementById("photograph");
const grafiek = document.getElementById("grafiek");
const illustratie = document.getElementById("illustratie");
const mixed_media = document.getElementById("mixed_media");
const ruimtelijke_werk = document.getElementById("ruimtelijke_werk");
const schilderen = document.getElementById("schilderen");
const tekenen = document.getElementById("overige");
const display = document.getElementById("display");

export function filter_systeem() {

  collage.addEventListener('click', () => {
    display.innerHTML = "";
    data.forEach(item => {
      if (item.categories === "Collage") {
        display.innerHTML += `<img> src="${item.img}"`;
      }
    });
  });

  fotografie.addEventListener('click', () => {
    display.innerHTML = "";
    data.forEach(item => {
      if (item.categories === "Fotografie") {
        display.innerHTML += `<img> src="${item.img}"`;
      }
    });
  });

  grafiek.addEventListener('click', () => {
    display.innerHTML = "";
    data.forEach(item => {
      if (item.categories === "Grafiek") {
        display.innerHTML += `<img> src="${item.img}"`;
      }
    });
  });

  illustratie.addEventListener('click', () => {
    display.innerHTML = "";
    data.forEach(item => {
      if (item.categories === "Illustratie") {
        display.innerHTML += `<img> src="${item.img}"`;
      }
    });
  });

  mixed_media.addEventListener('click', () => {
    display.innerHTML = "";
    data.forEach(item => {
      if (item.categories === "Mixed Media") {
        display.innerHTML += `<img> src="${item.img}"`;
      }
    });
  });

  ruimtelijke_werk.addEventListener('click', () => {
    display.innerHTML = "";
    data.forEach(item => {
      if (item.categories === "Ruimtelijke werk") {
        display.innerHTML += `<img> src="${item.img}"`;
      }
    });
  });

  tekenen.addEventListener('click', () => {
    display.innerHTML = "";
    data.forEach(item => {
      if (item.categories === "Tekenen") {
        display.innerHTML += `<img> src="${item.img}"`;
      }
    });
  });

  schilderen.addEventListener('click', () => {
    display.innerHTML = "";
    data.forEach(item => {
      if (item.categories === "Schilderen") {
        display.innerHTML += `<img> src="${item.img}"`;
      }
    });
  });
}








getArtworkData().then((data) => {
  console.log(data)

  collage.addEventListener("click", () => {
      display.innerHTML = "";
      data.forEach(item => {
        if (item.categories === "Collage") {
          display.innerHTML += `<img> src="${item.img}"`;
        }
      });
    }),
    fotografie.addEventListener("click", () => {
      display.innerHTML = "";
      data.forEach(item => {
        if (item.categories === "Fotografie") {
          display.innerHTML += `<img> src="${item.img}"`;
        }
      });
    }),

    grafiek.addEventListener("click", () => {
      display.innerHTML = "";
      data.forEach(item => {
        if (item.categories === "Grafiek") {
          display.innerHTML += `<img> src="${item.img}"`;
        }
      });
    }),
    illustratie.addEventListener("click", () => {
      display.innerHTML = "";
      data.forEach(item => {
        if (item.categories === "Illustratie") {
          display.innerHTML += `<img> src="${item.img}"`;
        }
      });
    }),
    mixed_media.addEventListener("click", () => {
      display.innerHTML = "";
      data.forEach(item => {
        if (item.categories === "Mixed Media") {
          display.innerHTML += `<img> src="${item.img}"`;
        }
      });
    }),
    ruimtelijke_werk.addEventListener("click", () => {
      display.innerHTML = "";
      data.forEach(item => {
        if (item.categories === "Ruimtelijke Werk") {
          display.innerHTML += `<img> src="${item.img}"`;
        }
      });
    }),
    tekenen.addEventListener("click", () => {
      display.innerHTML = "";
      data.forEach(item => {
        if (item.categories === "Tekenen") {
          display.innerHTML += `<img> src="${item.img}"`;
        }
      });
    })



})