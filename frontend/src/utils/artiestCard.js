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
    </div>`;
    })
    artisten.innerHTML = htmlString
}