export default function filterPopup(button, bg, popup) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test");
    bg.style.display = "block";
    popup.style.display = "flex";
  });

  bg.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test");
    bg.style.display = "none";
    popup.style.display = "none";
  });
}

console.log("wail-test2");
