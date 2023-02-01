import imgPopup from "../utils/imgPopup.js";

export default function gallery(artworkArray) {
  const collectionC1 = document.getElementById("collection-column1");
  const collectionC2 = document.getElementById("collection-column2");
  const collectionC3 = document.getElementById("collection-column3");

  let c1Counter = 0;
  let c2Counter = 0;
  let c3Counter = 0;

  let c1String = "";
  let c2String = "";
  let c3String = "";

  artworkArray.forEach((artwork) => {
    if (c1Counter <= c2Counter && c1Counter <= c3Counter) {
      c1String += `<img class="artwork" src="${artwork.img}" data-title="${artwork.Titel}" data-artist="${artwork.Kunstenaar}" data-price="${artwork.Verkoopprijs}" data-height="${artwork.hoogte}" data-width="${artwork.breedte}"  />`;
      c1Counter++;
    } else if (c2Counter <= c3Counter && c2Counter <= c1Counter) {
      c2String += `<img class="artwork" src="${artwork.img}" data-title="${artwork.Titel}" data-artist="${artwork.Kunstenaar}" data-price="${artwork.Verkoopprijs}" data-height="${artwork.hoogte}" data-width="${artwork.breedte}"  />`;
      c2Counter++;
    } else if (c3Counter <= c1Counter && c3Counter <= c2Counter) {
      c3String += `<img class="artwork" src="${artwork.img}" data-title="${artwork.Titel}" data-artist="${artwork.Kunstenaar}" data-price="${artwork.Verkoopprijs}" data-height="${artwork.hoogte}" data-width="${artwork.breedte}"  />`;
      c3Counter++;
    }
  });

  collectionC1.innerHTML = c1String;
  collectionC2.innerHTML = c2String;
  collectionC3.innerHTML = c3String;

  let artworkImages = document.querySelectorAll(".artwork");
  artworkImages.forEach((image) => {
    image.addEventListener("click", (e) => {
      e.preventDefault();
      const artworkTitle = e.target.getAttribute("data-title");
      const artworkArtist = e.target.getAttribute("data-artist");
      const artworkPrice = e.target.getAttribute("data-price");
      const artworkHeight = e.target.getAttribute("data-height");
      const artworkWidth = e.target.getAttribute("data-width");
      const artworkImage = e.target.src;
      imgPopup(
        artworkTitle,
        artworkArtist,
        artworkPrice,
        artworkHeight,
        artworkWidth,
        artworkImage
      );
    });
  });
}
