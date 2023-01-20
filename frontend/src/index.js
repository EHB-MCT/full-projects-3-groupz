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
