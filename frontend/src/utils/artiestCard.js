export default function artiestCard(data) {



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
  })


  artisten.innerHTML = htmlString

  // document.getElementById(`btn_mr_${index}`).addEventListener("click", function(event) {
    
  //   let discription = document.getElementById(`discription_art_${index}`).innerHTML;
  //   let selectedArtist = {
  //     Kunstenaar: item.Kunstenaar,
  //     discription: discription,
  //     image: item.img
  //   };
  //   localStorage.setItem("selectedArtist", JSON.stringify(selectedArtist));
  //   window.location = "./artiesteninfo.html";
  // })

  // document.getElementById(`btn_mr_${index}`).addEventListener("click", function () {
  //   let discription = document.getElementById(`discription_art_${index}`).innerHTML;
  //   let selectedArtist = {
  //     Kunstenaar: item.Kunstenaar,
  //     discription: discription,
  //     image: item.img
  //   };
  //   localStorage.setItem("selectedArtist", JSON.stringify(selectedArtist));
  //   window.location = "./artiesteninfo.html";
  // });



 
    data.forEach((item, index) => {
      document.getElementById(`btn_mr_${index}`).addEventListener("click", function () {
        window.location = "./artiesteninfo.html"
        
        let discription = document.getElementById(`discription_art_${index}`).innerHTML;
        let selectedArtist = {
          Kunstenaar: item.Kunstenaar,
          discription: discription,
          image: item.img
        };
        localStorage.setItem("selectedArtist", JSON.stringify(selectedArtist));
      });
    });
  };
