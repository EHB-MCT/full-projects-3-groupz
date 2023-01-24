export default function filterPopup(button, closeButton, bg, popup) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test");
    bg.style.display = "block";
    popup.style.display = "flex";
  });

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test");
    bg.style.display = "none";
    popup.style.display = "none";
  });
}
