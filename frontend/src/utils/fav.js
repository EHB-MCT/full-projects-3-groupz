const imgContainer = document.getElementById("images");

const favoriteImages = JSON.parse(localStorage.getItem('favoriteImages'));
console.log(favoriteImages);

if (favoriteImages && favoriteImages.length > 0) {
  imgContainer.style.display = "block";
  let html = '';
  for (const image of favoriteImages) {
    html += `<img style="width: 100px; padding:10px" src="${image}" />`;
  }
  imgContainer.innerHTML = html;
}

