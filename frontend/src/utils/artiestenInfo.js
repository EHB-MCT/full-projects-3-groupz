
// import artiestCard from "./artiestCard"
// artiestCard()

const display15 = document.getElementById("info_artiesten")
const display14 = document.getElementById("btn_mr")





display14.addEventListener("click", () => {

  setTimeout(500)
  window.location = "./artiestenInfo.html"
  display15.innerHTML = "";
  display15.innerHTML = "test"



})