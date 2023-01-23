window.onload = function () {
  const hamburgerNav = document.getElementById("hamburger-nav");
  const hamburgerNavBtn = document.getElementById("hamburger-btn");
  const hamburgerNavCloseBtn = document.getElementById("hamburger-close-btn");

  hamburgerNavBtn.addEventListener("click", () => {
    hamburgerNav.style.display = "flex";
    hamburgerNavBtn.style.display = "none";
    hamburgerNavCloseBtn.style.display = "flex";
  });

  hamburgerNavCloseBtn.addEventListener("click", () => {
    hamburgerNav.style.display = "none";
    hamburgerNavBtn.style.display = "flex";
    hamburgerNavCloseBtn.style.display = "none";
  });
};

//fetch API
async function getData(){
  let response = await fetch('http://localhost:6456/art')
  if(response.status == 200){
      return await response.json();
  }
}

getData().then(response => response.forEach(item => {
  const Titel = item.Titel;
  const Kunstenaar = item.Kunstenaar;
  const Verkoopprijs = item.Verkoopprijs;
  const breedte = item.breedte;
  const hoogte = item.hoogte;
  const diepte = item.diepte;
  const Archief = item.Archief;
  const Hoofdkleuren = item.Hoofdkleuren;
  const categories = item.categories;
  const Locatie = item.Locatie;
  const img = item.img;
  
  let htmlString = '';
  htmlString += 
  `<div>

  </div>`;

  document.getElementById("").innerHTML += htmlString;
}));