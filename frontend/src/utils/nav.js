export default function nav() {
  const hamburgerNav = document.getElementById("hamburger-nav");
  const hamburgerNavBtn = document.getElementById("hamburger-btn");
  const hamburgerNavCloseBtn = document.getElementById("hamburger-close-btn");
  const collection_main = document.getElementById("collection-main");
  const compart_main = document.getElementById("compart-main");

  hamburgerNavBtn.addEventListener("click", () => {
    hamburgerNav.style.display = "flex";
    hamburgerNavBtn.style.display = "none";
    hamburgerNavCloseBtn.style.display = "flex";
    collection_main.style.position = "fixed";
    // compart_main.style.position = "fixed";
  });

  hamburgerNavCloseBtn.addEventListener("click", () => {
    hamburgerNav.style.display = "none";
    hamburgerNavBtn.style.display = "flex";
    hamburgerNavCloseBtn.style.display = "none";
    collection_main.style.position = "relative";
    // compart_main.style.position = "relative";
  });
}
