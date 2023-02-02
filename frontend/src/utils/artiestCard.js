export default function artiestCard(data) {
  const artisten = document.getElementById("artiesten");
  let htmlString = "";
  data.forEach(item => {
    htmlString +=
      `
    <div class="artiestenWrapper" id="artisten">
    <div class="artiesten">
      <h2 class="ArtiestenH">${item.Kunstenaar}</h2>
      <p class="ArtiestenP">${item.Archief} werken</p>
    </div>
    <div class="infoArtiesten">
      <p>${item.discription}</p>
    </div>
    <div id="nav-btns-container" class="artiesten-button">
    <a href=" ${item.website}"><button>Website</button></a>
    <button id = "btn_mr"> Meer info</button>
  </div>

  `;




  })
  artisten.innerHTML = htmlString




  const display15 = document.getElementById("info_artiesten")
  const display14 = document.getElementById("btn_mr")



  display14.addEventListener("click", () => {
    /*document.querySelectorAll('.btn_mr').forEach(button => {
      button.addEventListener('click', function() {
        fetchArtistInfo(this.dataset.artistId);
        console.log("hallo");
      });*/
  })
}