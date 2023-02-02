export default function imgPopup(title, artist, price, height, width, img) {
  const popupBg = document.getElementById("img-popup-bg");
  const imgPopup = document.getElementById("img-popup");
  popupBg.style.display = "block";
  imgPopup.innerHTML = `
  <div id="img-popup-img-container">
        <img id="img"
          src="${img}"
        />
      </div>
      <div id="img-popup-information-container">
        <div id="img-popup-information-sub-container-left">
          <div id="img-popup-information-sub-container-left-top">
            <p class="img-popup-title">${title}</p>
            <p>${artist}</p>
          </div>
          <div id="img-popup-information-sub-container-left-bottom">
            <button id="favorite_button">Favoriet</button>
            <p id = "text_fav" >
          </div>
        </div>
        <div id="img-popup-information-sub-container-right">
          <div class="img-popup-information-details-container">
            <div class="img-popup-details-icon-container">
              <span class="material-symbols-outlined"> height </span>
            </div>
            <p>${height} cm</p>
          </div>
          <div class="img-popup-information-details-container">
            <div class="img-popup-details-icon-container">
              <span class="material-symbols-outlined width-icon"> height </span>
            </div>
            <p>${width} cm</p>
          </div>
          <div class="img-popup-information-details-container">
            <div class="img-popup-details-icon-container">
              <span class="material-symbols-outlined"> payments </span>
            </div>
            <p>€ ${price}</p>
          </div>
        </div>
      </div>
  `;
  imgPopup.style.display = "block";
  popupBg.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.style.display = "none";
    imgPopup.style.display = "none";
  });

  document.getElementById("favorite_button").addEventListener("click", function () {
    let image = document.getElementById("img").src;
    console.log(image);

    let favoriteImages = [];
    if (localStorage.getItem("favoriteImages")) {
      favoriteImages = JSON.parse(localStorage.getItem("favoriteImages"));
    }

    if (!favoriteImages.includes(image)) {
      favoriteImages.push(image);
    }

    localStorage.setItem("favoriteImages", JSON.stringify(favoriteImages));
  });


}



