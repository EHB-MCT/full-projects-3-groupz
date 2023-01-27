// import data from '../art.json' assert {type: 'JSON'}
// console.log(data)


// import {
//   getArtworkData
// } from "./getData";

// getArtworkData()


// const app = {
//   eventList: [],
//   filteredEventList: [],
//   searchTerm: "",
//   sortBy: "location",
//   sortBy: "sort",

//   addEventListeners: function () {
//     document.getElementById("collage").addEventListener("click", () => {
//       this.applyFilter();
//     });

//   },

  // init() {

  //     document.getElementById('searchForm').addEventListener('submit', (e) => this.sortEvents(e));
  //     this.fetchEvents();
  // },

  // fetchEvents(


  // ) {
  //   getArtworkData.then(response => {
  //     return response.json();
  //   }).then(data => {
  //     console.log("test");
  //     data.forEach(element => {

  //       const categories = element.categories;
  //       const img = element.img;
  //       const locatie = element.locatie;

  //       let items = "";
  //       if (categories, img, locatie) {
  //         items = new Event(categories, img, locatie);
  //       }

  //       // const items = new Event(Title, Description, Image, Location);
  //       this.eventList.push(items);

  //       this.filteredEventList = this.eventList;

  //     });
  //     this.render();
  //   });

  // },

  // applyFilter: function () {

  //   this.eventList.sort((a, b) => {
  //     return a.title - b.title;
  //   });
  //   this.render();
  // },

  // render: function () {

  //   let eventHtml = document.getElementById("eventContainer");
  //   eventHtml.innerHTML = "";
  //   let htmlString = "";
  //   this.eventList.forEach(element => {
  //     htmlString += element.htmlString;
  //   });

  //   eventHtml.innerHTML = htmlString;

    // let htmlString = '';
    // this.eventList.forEach(element =>{
    //     htmlString += element.htmlString;
    // });
    // document.getElementById('eventContainer').innerHtml = htmlString;





//   },

// };



// app.init();
// app.fetchEvents();

// Success 






// let gallery = {
//   paintings: paintings,
//   userInput: {
//     selectedSort: 'Sort',
//     selectedLocation: 'Locatie'
//   },

//   applyAll: function () {

//     this.filterPaintings();
//     this.sortPaintings();
//     this.calculateTotalPrice();
//     this.renderPaintings();
//   },
//   filterPaintings: function () {

//     this.paintings = paintings.filter((item) => {
//       if (gallery.userInput.selectedLocation == "Locatie") {
//         return true;
//       }
//       return item.location == gallery.userInput.selectedLocation;
//     });
//   },
//   sortPaintings: function () {
//     this.paintings.sort((a, b) => {
//       return a[gallery.userInput.selectedSort] - b[gallery.userInput.selectedSort];
//     });
//   },
//   initEvents: function () {
//     const sortRadios = document.getElementsByName('sortBy');
//     sortRadios.forEach(function (radio) {
//       radio.addEventListener('change', function (event) {
//         gallery.userInput.selectedSort = this.value;
//         gallery.applyAll();
//       });
//     });
//     const filterRadios = document.getElementsByName('location');
//     filterRadios.forEach(function (radio) {
//       radio.addEventListener('change', function (event) {
//         gallery.userInput.selectedArtist = this.value;
//         gallery.applyAll();
//       });
//     });
//   },
//   renderPaintings: function () {
//     const section = document.getElementById('content_section');
//     section.innerHTML = "";
//     this.paintings.forEach(function (item) {
//       const html = `<article>
//             <img src="${item.imageURL}" alt="" />
//             <div class="article_content_wrapper">
//               <div>
//                 <h3>${item.title}</h3>
//                 <h4>${item.artist}</h4>
//               </div>
//               <div>
//                 <div class="price">${item.price}</div>
//                 <div class="date">${item.auctionDate}</div> 
//               </div>
//             </div>
//           </article>`;
//       section.insertAdjacentHTML('beforeend', html);
//     });
//   },


// };

// gallery.initEvents();
// gallery.applyAll();







// fetch('../art.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));




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
