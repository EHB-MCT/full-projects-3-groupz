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
    <a href="${item.website}"><button>Website</button></a>
    <a href=""><button onclick="artiestInfo()">Meer info</button></a>
  </div>`;
    })
    artisten.innerHTML = htmlString
}

function artiestInfo(){
  console.log("yes");
  //const infobtn = document.getElementById("meerinfo");
}