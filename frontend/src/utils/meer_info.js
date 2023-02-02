

const info_artist = document.getElementById("infoo");
const artist_name = document.getElementById("home-title-container")

const selectedArtist = JSON.parse(localStorage.getItem("selectedArtist"));

if (selectedArtist) {
  let html1 = '';

  html1 += `
   
    
    <p>${selectedArtist.discription}</p>
    <img style="width:40%; height : 40%; margin-top:30px;" src="${selectedArtist.image}" alt="Image">

  `;

  info_artist.innerHTML = html1;


  let html2 = '';

  html2 += `
  <hr class="hr1" />
  <h1>${selectedArtist.Kunstenaar}</h1>
  <hr class="hr2" />`

  artist_name.innerHTML = html2;
}