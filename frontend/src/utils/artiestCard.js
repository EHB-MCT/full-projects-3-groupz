import {
  getArtworkData
} from "../utils/getData.js";

getArtworkData();




export default function artiestCard(data) {
  const images = [];
  const artisten = document.getElementById("artiesten");
  let htmlString = "";
  data.forEach((item, index) => {
    htmlString +=
      `
      <div class="artiestenWrapper" id="artisten">
      <div class="artiesten">
        <h2 class="ArtiestenH">${item.Kunstenaar}</h2>
        <p class="ArtiestenP">${item.Archief} werken</p>
      </div>
      <div class="infoArtiesten">
        <p id = "discription_art_${index}" >${item.discription}</p>
      </div>
      <div id="nav-btns-container" class="artiesten-button">
      <a href=" ${item.website}"><button>Website</button></a>
      <button id = "btn_mr_${index}"> Meer info</button>
    </div>
  
    `;

    // let image = item.img;
    // images.push(image);


  })

  artisten.innerHTML = htmlString




  window.onload = (event) => {
    data.forEach((item, index) => {
      document.getElementById(`btn_mr_${index}`).addEventListener("click", function () {
        window.location = "./artiesteninfo.html"
        let discription = document.getElementById(`discription_art_${index}`).innerHTML;

        console.log(images)

        console.log(discription);


        let meer_info = "";
        let meer_info_img = [];
        if (localStorage.getItem("meer_info")) {
          meer_info = JSON.parse(localStorage.getItem("meer_info"));

        }



        if (!meer_info.includes(discription)) {

          let meer_info = discription

          localStorage.setItem("meer_info", JSON.stringify(meer_info));


        }

      });
    });
  };




  // let mr_info = [];
  // if (localStorage.getItem("images")) {
  //   mr_info = JSON.parse(localStorage.getItem("images"));
  // }
  // if (!mr_info.includes(image)) {
  //   mr_info.push(image);
  // }
  // localStorage.setItem("images", JSON.stringify(mr_info));




}




// const display16 = document.getElementById("tbn");
// const mr_info = JSON.parse(localStorage.getItem('img_fav'));
// console.log(mr_info);
// if (mr_info && mr_info.length > 0) {
//   display16.style.display = "block";
//   let html = '';
//   for (const image of mr_info) {
//     html += `<img style="width: 100px; padding:10px" src="${image}" />`;
//   }
//   display16.innerHTML = html;
// }

// export default function artiestCard(data) {

//   const artisten = document.getElementById("artiesten");
//   let htmlString = "";
//   data.forEach(item => {
//     htmlString +=
//       `
//     <div class="artiestenWrapper" id="artisten">
//     <div class="artiesten">
//       <h2 class="ArtiestenH">${item.Kunstenaar}</h2>
//       <p class="ArtiestenP">${item.Archief} werken</p>
//     </div>
//     <div class="infoArtiesten">
//       <p>${item.discription}</p>
//     </div>
//     <div id="nav-btns-container" class="artiesten-button">
//     <a href=" ${item.website}"><button>Website</button></a>
//     <button onclick = "Function_btn()">Meer   info</button>
//   </div>

//     <script>
//     function Function_btn {
//      window.location = "./artiestenInfo.html" 
//     }
//     </script>

//   `;




//   })
//   artisten.innerHTML = htmlString


// }