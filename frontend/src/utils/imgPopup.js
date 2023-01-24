export default function imgPopup() {
  const popupBg = document.getElementById("filter-popup-bg");
  const imgPopup = document.getElementById("img-popup");

  popupBg.style.display = "block";
  imgPopup.style.display = "flex";
  popupBg.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.style.display = "none";
    imgPopup.style.display = "none";
  });
}
